// gsap.registerPlugin(ScrollTrigger);

// let iteration = 0; // gets iterated when we scroll all the way to the end or start and wraps around - allows us to smoothly continue the playhead scrubbing in the correct direction.

// const spacing = 0.02,    // spacing of the cards (stagger)
//   snap = gsap.utils.snap(spacing), // we'll use this to snap the playhead on the seamlessLoop
//   cards = gsap.utils.toArray('.cards li'),
//   contents = gsap.utils.toArray('.content-details'),
//   seamlessLoop = buildSeamlessLoop(cards, spacing),
//   seamlessLoop2 = buildSeamlessLoop2(contents, spacing),
//   scrub = gsap.to(seamlessLoop, { // we reuse this tween to smoothly scrub the playhead on the seamlessLoop
//     totalTime: 0,
//     duration: 0.5, 
//     ease: "power3",
//     paused: true
//   }),
//   scrub2 = gsap.to(seamlessLoop2, { // we reuse this tween to smoothly scrub the playhead on the seamlessLoop
//     totalTime: 0,
//     duration: 0.5, 
//     ease: "power3",
//     paused: true
//   }),
//   trigger = ScrollTrigger.create({
//     start: 0,
//     onUpdate(self) {
//       if (self.progress === 1 && self.direction > 0 && !self.wrapping) {
//         wrapForward(self);
//       } else if (self.progress < 1e-5 && self.direction < 0 && !self.wrapping) {
//         wrapBackward(self);
//       } else {
//         scrub.vars.totalTime = snap((iteration + self.progress) * seamlessLoop.duration());
//         scrub.invalidate().restart(); // to improve performance, we just invalidate and restart the same tween. No need for overwrites or creating a new tween on each update.
//         scrub2.vars.totalTime = snap((iteration + self.progress) * seamlessLoop2.duration());
//         scrub2.invalidate().restart(); // to improve performance, we just invalidate and restart the same tween. No need for overwrites or creating a new tween on each update.
//         self.wrapping = false;
        
//       }
//     },
//     end: "+=3000",
//     pin: "body"
//   });

// function wrapForward(trigger) { // when the ScrollTrigger reaches the end, loop back to the beginning seamlessly
//   iteration++;
//   trigger.wrapping = true;
//   trigger.scroll(trigger.start + 1);
// }

// function wrapBackward(trigger) { // when the ScrollTrigger reaches the start again (in reverse), loop back to the end seamlessly
//   iteration--;
//   if (iteration < 0) { // to keep the playhead from stopping at the beginning, we jump ahead 10 iterations
//     iteration = 2;
//     seamlessLoop.totalTime(seamlessLoop.totalTime() + seamlessLoop.duration() * 10);
//     seamlessLoop2.totalTime(seamlessLoop2.totalTime() + seamlessLoop2.duration() * 10);
//     scrub.pause(); // otherwise it may update the totalTime right before the trigger updates, making the starting value different than what we just set above. 
//     scrub2.pause(); // otherwise it may update the totalTime right before the trigger updates, making the starting value different than what we just set above. 
//   }
//   trigger.wrapping = true;
//   trigger.scroll(trigger.end - 1);
// }

// function scrubTo(totalTime) { // moves the scroll position to the place that corresponds to the totalTime value of the seamlessLoop, and wraps if necessary.
//   let progress = (totalTime - seamlessLoop.duration() * iteration) / seamlessLoop.duration();
//   if (progress > 1) {
//     wrapForward(trigger);
//   } else if (progress < 0) {
//     wrapBackward(trigger);
//   } else {
//     trigger.scroll(trigger.start + progress * (trigger.end - trigger.start));
//   }
// }

// document.querySelector(".next").addEventListener("click", () => {scrubTo(scrub.vars.totalTime + spacing); scrubTo(scrub2.vars.totalTime + spacing);});
// document.querySelector(".prev").addEventListener("click", () => {scrubTo(scrub.vars.totalTime - spacing); scrubTo(scrub2.vars.totalTime + spacing);});


// function buildSeamlessLoop(items, spacing) {
//   let overlap = Math.ceil(1 / spacing), // number of EXTRA animations on either side of the start/end to accommodate the seamless looping
//     startTime = items.length * spacing + 0.5, // the time on the rawSequence at which we'll start the seamless loop
//     loopTime = (items.length + overlap) * spacing + 1, // the spot at the end where we loop back to the startTime 
//     rawSequence = gsap.timeline({paused: true}), // this is where all the "real" animations live
//     seamlessLoop = gsap.timeline({ // this merely scrubs the playhead of the rawSequence so that it appears to seamlessly loop
//       paused: true,
//       repeat: -1, // to accommodate infinite scrolling/looping
//       onRepeat() { // works around a super rare edge case bug that's fixed GSAP 3.6.1
//         this._time === this._dur && (this._tTime += this._dur - 0.01);
//       }
//     }),
//     l = items.length + overlap * 2,
//     time = 0,
//     i, index, item;

//   // set initial state of items
//   gsap.set(items, {yPercent: 400, opacity: 0, scale: 0});

//   // now loop through and create all the animations in a staggered fashion. Remember, we must create EXTRA animations at the end to accommodate the seamless looping.
//   for (i = 0; i < l; i++) {
//     index = i % items.length;
//     item = items[index];
//     time = i * spacing;
//     rawSequence.fromTo(item, {scale: 0, opacity: 0}, {scale: 1, opacity: 1, zIndex: 100, duration: 0.5, yoyo: true, repeat: 1, ease: "power1.in", immediateRender: false}, time)
//                .fromTo(item, {yPercent: 183}, {yPercent: -400, duration: 1, ease: "none", immediateRender: false}, time);
//     i <= items.length && seamlessLoop.add("label" + i, time); // we don't really need these, but if you wanted to jump to key spots using labels, here ya go.
//   }
  
//   // here's where we set up the scrubbing of the playhead to make it appear seamless. 
//   rawSequence.time(startTime);
//   seamlessLoop.to(rawSequence, {
//     time: loopTime,
//     duration: loopTime - startTime,
//     ease: "none"
//   }).fromTo(rawSequence, {time: overlap * spacing + 1}, {
//     time: startTime,
//     duration: startTime - (overlap * spacing + 1),
//     immediateRender: false,
//     ease: "none"
//   });
//   return seamlessLoop;
// }
// function buildSeamlessLoop2(items, spacing) {
//   let overlap = Math.ceil(1 / spacing), // number of EXTRA animations on either side of the start/end to accommodate the seamless looping
//     startTime = items.length * spacing + 0.5, // the time on the rawSequence at which we'll start the seamless loop
//     loopTime = (items.length + overlap) * spacing + 1, // the spot at the end where we loop back to the startTime 
//     rawSequence = gsap.timeline({paused: true}), // this is where all the "real" animations live
//     seamlessLoop = gsap.timeline({ // this merely scrubs the playhead of the rawSequence so that it appears to seamlessly loop
//       paused: true,
//       repeat: -1, // to accommodate infinite scrolling/looping
//       onRepeat() { // works around a super rare edge case bug that's fixed GSAP 3.6.1
//         this._time === this._dur && (this._tTime += this._dur - 0.01);
//       }
//     }),
//     l = items.length + overlap * 2,
//     time = 0,
//     i, index, item;

//   // set initial state of items
//   gsap.set(items, {yPercent: 400, opacity: 0, scale: 0});

//   // now loop through and create all the animations in a staggered fashion. Remember, we must create EXTRA animations at the end to accommodate the seamless looping.
//   for (i = 0; i < l; i++) {
//     index = i % items.length;
//     item = items[index];
//     time = i * spacing;
//     rawSequence.fromTo(item, {scale: 0, opacity: 0}, {scale: 1, opacity: 1, zIndex: 100, duration: 0.5, yoyo: true, repeat: 1, ease: "power1.in", immediateRender: false}, time)
//                .fromTo(item, {yPercent: 200}, {yPercent: -200, duration: 1, ease: "none", immediateRender: false}, time);
//     i <= items.length && seamlessLoop.add("label" + i, time); // we don't really need these, but if you wanted to jump to key spots using labels, here ya go.
//   }
  
//   // here's where we set up the scrubbing of the playhead to make it appear seamless. 
//   rawSequence.time(startTime);
//   seamlessLoop.to(rawSequence, {
//     time: loopTime,
//     duration: loopTime - startTime,
//     ease: "none"
//   }).fromTo(rawSequence, {time: overlap * spacing + 1}, {
//     time: startTime,
//     duration: startTime - (overlap * spacing + 1),
//     immediateRender: false,
//     ease: "none"
//   });
//   return seamlessLoop;
// }

var tl = gsap.timeline({
  scrollTrigger: {
    trigger: "body",
    scrub: 1,
    end: "100%",
    pin: true,
  }
});
tl.add("start");
tl.to(".vid-1",{
  opacity: 0,
  delay: 2,
  duration: 2
},"start")
tl.from(".txt-container-1",{
  opacity: 1,
  duration: 3
}, "start")
tl.to(".txt-container-1",{
  opacity: 0,
  delay: 2,
  duration: 2,
}, "start")
tl.set(".vid-1", {zIndex: -1})

tl.add("start2")
tl.from(".vid-2", {
  scale: 0.9,
}, "start2")
tl.to(".vid-2", {
  scale: 1,
  y: -40
}, "start2")
tl.to(".txt-container-2",{
  opacity: 1,
  duration: 3
}, "start2")
tl.to(".vid-2", {
  opacity: 0,
  delay: 2,
  duration: 2
}, "start2")
tl.to(".txt-container-2",{
  opacity: 0,
  delay: 2,
  duration: 2
}, "start2")
tl.to(".vid-3", {
  y: -20
}, "start2")
tl.to(".vid-4", {
  y: -20
}, "start2")
tl.to(".vid-5", {
  y: -20
}, "start2")
tl.set(".vid-2", {zIndex: -1})

tl.add("start3")
tl.from(".vid-3", {
  scale: 0.8,
}, "start3")
tl.to(".vid-3", {
  scale: 1,
  y: -80
}, "start3")
tl.to(".txt-container-3",{
  opacity: 1,
  duration: 3
}, "start3")
tl.to(".vid-3", {
  opacity: 0,
  delay: 2,
  duration: 2
}, "start3")
tl.to(".txt-container-3",{
  opacity: 0,
  delay: 2,
  duration: 2
}, "start3")
tl.to(".vid-4", {
  y: -70,
  scale: 0.9
}, "start3")
tl.to(".vid-5", {
  y: -70,
  scale: 0.8
}, "start3")
tl.set(".vid-3", {zIndex: -1})

tl.add("start4")
tl.from(".vid-4", {
  scale: 0.7,
}, "start4")
tl.to(".vid-4", {
  scale: 1,
  y: -110
}, "start4")
tl.to(".txt-container-4",{
  opacity: 1,
  duration: 3
}, "start4")
tl.to(".vid-4", {
  opacity: 0,
  delay: 2,
  duration: 2
}, "start4")
tl.to(".txt-container-4",{
  opacity: 0,
  delay: 2,
  duration: 2
}, "start4")
tl.to(".vid-5", {
  y: -100,
  scale: 0.9
}, "start4")
tl.set(".vid-4", {zIndex: -1})

tl.add("start5")
tl.from(".vid-5", {
  scale: 0.6,
}, "start5")
tl.to(".vid-5", {
  scale: 1,
  y: -150
}, "start5")
tl.to(".txt-container-5",{
  opacity: 1,
  duration: 3
}, "start5")
tl.to(".vid-5", {
  opacity: 0,
  delay: 2,
  duration: 3
}, "start5")
tl.to(".txt-container-5",{
  opacity: 0,
  delay: 2,
  duration: 2
}, "start5")
tl.set(".vid-5", {zIndex: -1})