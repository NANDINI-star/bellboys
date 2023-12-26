// gsap.registerPlugin(Observer);

// const sections = document.querySelectorAll('.videos1 .thumbnail-container');
// const txts = document.querySelectorAll('.txt-container');
// const imgs = document.querySelectorAll('.videos1 .thumbnail-container img');
// let currentIndex = -1;
// let animating;

// const translateAmount = 0;

// const wrap = gsap.utils.wrap(0, sections.length);

// const goTo = (index, direction = 'first') => {
//   console.log(index, sections[0], txts[0], imgs[0]);
//   index = wrap(index);
//   animating = true;
//   let leave, enter;
//   const defaultPos = { transform: 'none', autoAlpha: 1 };
  
//   const tl = gsap.timeline({
//     defaults: { duration: .75, ease: 'power2.inOut', autoAlpha: 0 },
//     onComplete: () => { animating = false; }
//   });
  
//   switch(direction) {
//     case 'up':
//       leave = { y: translateAmount+"vw"};
//       enter = { y: -translateAmount+"vw"};
//       break;
//     case 'down':
//       leave = { y: -translateAmount+"vw"};
//       enter = { y: translateAmount+"vw"};
//       break;
//     case 'first': break;
//   }
  
//   tl.fromTo(sections[index], enter, defaultPos);
//   tl.fromTo(txts[index], enter, defaultPos);
//   // tl.fromTo(imgs[index], enter, defaultPos);
  
//   if(currentIndex > -1) {
//     tl
//       .to(sections[currentIndex], leave, 0)
//       .set(sections[currentIndex], { transform: 'none' });
//     tl
//       .to(txts[currentIndex], leave, 0)
//       .set(txts[currentIndex], { transform: 'none' });
//     // tl
//     //   .to(imgs[currentIndex], leave, 0)
//     //   .set(imgs[currentIndex], { transform: 'none' });
//   }
  
//   currentIndex = index;
  
// }

// goTo(0);

// Observer.create({
//   target: ".ow-content",
//   wheelSpeed: -1,
//   tolerance: 20,
//   onDown: () => !animating && goTo(currentIndex - 1, 'up'),
//   onUp: () => !animating && goTo(currentIndex + 1, 'down' ),
//   preventDefault: true,
// })
const carousel_thumbnail = document.querySelector(".carousel__thumbnails");
carousel_thumbnail.addEventListener("click",()=>{
  const input_checked = document.querySelectorAll("input");
  let iframeOwr = document.querySelectorAll(".slide-vid");
  
  input_checked.forEach((ele, idx) => {
    // console.log(ele.checked, idx);
  
    if (ele.checked && iframeOwr[idx]) {
      console.log(iframeOwr[idx].src);
  
      if (!iframeOwr[idx].src.endsWith("autoplay=1")) {
        console.log(iframeOwr[idx].src)
        iframeOwr[idx].src = iframeOwr[idx].src + '&autoplay=1';
        console.log(iframeOwr[idx].src)
      }
    } else if (!ele.checked && iframeOwr[idx] && iframeOwr[idx].src.endsWith("autoplay=1")) {
      console.log(iframeOwr[idx].src, idx);
      iframeOwr[idx].src = iframeOwr[idx].src.substring(0, iframeOwr[idx].src.length - 11);
      console.log(iframeOwr[idx].src, idx);
    }
  });
});
