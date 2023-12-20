gsap.registerPlugin(Observer);

const sections = document.querySelectorAll('.videos1 .thumbnail-container');
const txts = document.querySelectorAll('.txt-container');
let currentIndex = -1;
let animating;

const translateAmount = 0;

const wrap = gsap.utils.wrap(0, sections.length);

const goTo = (index, direction = 'down') => {
  
  index = wrap(index);
  animating = true;
  let leave, enter;
  const defaultPos = { transform: 'none', autoAlpha: 1 };
  
  const tl = gsap.timeline({
    defaults: { duration: .75, ease: 'power2.inOut', autoAlpha: 0 },
    onComplete: () => { animating = false; }
  });
  
  switch(direction) {
    case 'up':
      leave = { y: translateAmount+"vw"};
      enter = { y: -translateAmount+"vw"};
      break;
    case 'down':
      leave = { y: -translateAmount+"vw"};
      enter = { y: translateAmount+"vw"};
      break;
  }
  
  tl.fromTo(sections[index], enter, defaultPos);
  tl.fromTo(txts[index], enter, defaultPos);
  
  if(currentIndex > -1) {
    tl
      .to(sections[currentIndex], leave, 0)
      .set(sections[currentIndex], { transform: 'none' });
    tl
      .to(txts[currentIndex], leave, 0)
      .set(txts[currentIndex], { transform: 'none' });
  }
  
  currentIndex = index;
  
}

goTo(0);

Observer.create({
  target: ".ow-content",
  wheelSpeed: -1,
  tolerance: 20,
  onDown: () => !animating && goTo(currentIndex - 1, 'up'),
  onUp: () => !animating && goTo(currentIndex + 1, 'down' ),
  preventDefault: true,
})