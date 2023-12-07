var tl = gsap.timeline({
  scrollTrigger: {
    trigger: "body",
    scrub: 1,
    end: "50%",
    pin: true,
  }
});
tl.add("start");
tl.to(".vid-1",{
  opacity: 0,
  delay: 2,
  duration: 5
},"start");
tl.from(".txt-container-1",{
  opacity: 1,
  duration: 5
}, "start");
tl.to(".txt-container-1",{
  opacity: 0,
  delay: 2,
  duration: 5
}, "start");
tl.set(".vid-1", {zIndex: -1});

tl.add("start2");
tl.from(".vid-2", {
  scale: 0.9,
}, "start2");
tl.to(".vid-2", {
  scale: 1,
  y: -40
}, "start2");
tl.to(".txt-container-2",{
  opacity: 1,
  duration: 5
}, "start2");
tl.to(".vid-2", {
  opacity: 0,
  delay: 2,
  duration: 5
}, "start2");
tl.to(".txt-container-2",{
  opacity: 0,
  delay: 2,
  duration: 5
}, "start2");
tl.to(".vid-3", {
  y: -20
}, "start2");
tl.to(".vid-4", {
  y: -20
}, "start2");
tl.to(".vid-5", {
  y: -20
}, "start2");
tl.set(".vid-2", {zIndex: -1});

tl.add("start3");
tl.from(".vid-3", {
  scale: 0.8,
}, "start3");
tl.to(".vid-3", {
  scale: 1,
  y: -80
}, "start3");
tl.to(".txt-container-3",{
  opacity: 1,
  duration: 5
}, "start3");
tl.to(".vid-3", {
  opacity: 0,
  delay: 2,
  duration: 5
}, "start3");
tl.to(".txt-container-3",{
  opacity: 0,
  delay: 2,
  duration: 5
}, "start3");
tl.to(".vid-4", {
  y: -70,
  scale: 0.9
}, "start3");
tl.to(".vid-5", {
  y: -70,
  scale: 0.8
}, "start3");
tl.set(".vid-3", {zIndex: -1})

tl.add("start4");
tl.from(".vid-4", {
  scale: 0.7,
}, "start4");
tl.to(".vid-4", {
  scale: 1,
  y: -110
}, "start4");
tl.to(".txt-container-4",{
  opacity: 1,
  duration: 5
}, "start4");
tl.to(".vid-4", {
  opacity: 0,
  delay: 2,
  duration: 5
}, "start4");
tl.to(".txt-container-4",{
  opacity: 0,
  delay: 2,
  duration: 5
}, "start4");
tl.to(".vid-5", {
  y: -100,
  scale: 0.9
}, "start4");
tl.set(".vid-4", {zIndex: -1});

tl.add("start5");
tl.from(".vid-5", {
  scale: 0.6,
}, "start5");
tl.to(".vid-5", {
  scale: 1,
  y: -150
}, "start5");
tl.to(".txt-container-5",{
  opacity: 1,
  duration: 5
}, "start5");
tl.to(".vid-5", {
  opacity: 0,
  delay: 2,
  duration: 5
}, "start5");
tl.to(".txt-container-5",{
  opacity: 0,
  delay: 2,
  duration: 5
}, "start5");
tl.set(".vid-5", {zIndex: -1});