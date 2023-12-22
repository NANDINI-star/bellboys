var width = window.innerWidth;
const homeLink = document.querySelector(".home-link");
const homeLinkC = document.querySelector(".home-link-c");

const tl = gsap.timeline();
if(width <= 475){
  tl.to(".hero-anim", {display: "block"});
  tl.to(".hero-anim", {height: "70vw", duration: 1}, "start");
  tl.to(".left", {top: "20vw", height: "15vw", duration: 1}, "start");
  tl.to(".right", {top: "35vw", height: "15vw",duration: 1}, "start");
  tl.to(".hero-anim", {display: "none"}, "start2");
  tl.to(".left", {display: "none"}, "start2");
  tl.to(".right", {display: "none"}, "start2");
  tl.to(".hero-anim", {opacity: "0", duration: 0}, "start3");
  tl.to(".left", {opacity: "0", duration: 0}, "start3");
  tl.to(".right", {opacity: "0", duration: 0}, "start3");
}


// homeLink.addEventListener("click", (e) => {
//   console.log(window.location.href)
//   e.preventDefault();
//   // window.location.href = "/bellboys/index.html";
//   if(!window.location.href.endsWith("index.html")){
//     window.location.href = "/bellboys/index.html";
//   }
//   if(width <= 475 && (window.location.pathname.endsWith("/bellboys/index.html"))){
    
//     const navIcon = document.querySelector('.nav-icon');

//     e.preventDefault();

//     const tl = gsap.timeline({
//       onComplete: function () {
//         console.log("yooo2");
//         // window.location.href = "/bellboys/index.html";
//       },
//     });
//     tl.to(".navbar", {display: "none"})
//     navIcon.src = 'assets/images/nav-icon.svg';
//     tl.fromTo(".right", {top: "10vw", duration: 2}, {top: "30vw", duration: 2}, "start");
//     tl.fromTo(".left", {top: "8vw", duration: 2}, {top: "15vw", duration: 2}, "start");
//     // tl.to(".right", {top: "10vw"});
//     // tl.to(".left", {top: "8vw"});
//     tl.fromTo(".hero", { y: '40vh', duration: 2 }, { y: 0, duration: 2 }, "start");
//     // tl.to(".hero", { y: '30vh', duration: 2 });
//     tl.fromTo(".hero-anim", { height: "100vh", duration: 2 }, { height: "0px", duration: 2 }, "start");
//     // tl.to(".hero-anim", { height: "100vh", duration: 2 });
//     tl.fromTo(".arrow", { height: "40vw", duration: 2 }, { height: "15vw", duration: 2 }, "start");
//     // tl.to(".arrow", { height: "40vw", duration: 2 });
//     tl.fromTo(".text-3", { width: "50vw", duration: 1 }, { width: "40vw", duration: 1 }, "start");
//     // tl.to(".text-3", { width: "50vw", duration: 2 });
  
//   }else{
//     window.location.href = "/bellboys/index.html";
//   }
  
// })
// homeLinkC.addEventListener("click", (e) => {
//   console.log("yooo1")
//   e.preventDefault();
//   if(!window.location.href.endsWith("index.html")){
//     window.location.href = "/bellboys/index.html";
//   }
//   if(width <= 475 && (window.location.pathname.endsWith("/bellboys/index.html"))){
//     setTimeout(()=>{
//       console.log("TTTTT");
//       if(!window.location.href.endsWith("index.html")){
//         window.location.href = "/bellboys/index.html";
//       }
  
//       document.documentElement.scrollTop = 0;
//       e.preventDefault();
  
//       const tl = gsap.timeline({
//       });
//       tl.fromTo(".right", {top: "10vw", duration: 2}, {top: "30vw", duration: 2}, "start");
//       tl.fromTo(".left", {top: "8vw", duration: 2}, {top: "15vw", duration: 2}, "start");
     
//       tl.fromTo(".hero", { y: '40vh', duration: 2 }, { y: 0, duration: 2 }, "start");
//       tl.fromTo(".hero-anim", { height: "100vh", duration: 2 }, { height: "0px", duration: 2 }, "start");
//       tl.fromTo(".arrow", { height: "40vw", duration: 2 }, { height: "15vw", duration: 2 }, "start");
//       tl.fromTo(".text-3", { width: "50vw", duration: 1 }, { width: "40vw", duration: 1 }, "start");
    
//       }, 2000);
//     }
//     else{
//       window.location.href = "/bellboys/index.html";
//     }
    
  
// })



function handleNavClick() {
  const navIcon = document.querySelector('.nav-icon');
  const closeIcon = document.querySelector('.close-icon');
  const navbar = document.querySelector('.navbar');

  if (navIcon.src.endsWith('nav-icon.svg')) {
    navIcon.addEventListener('click', function () {
      console.log("upup")
      navIcon.src = './assets/images/close-icon.svg';
      navbar.style.display = 'block';
      // navIcon.style.display = 'none';
      // closeIcon.style.visibility = 'visible';
      navbar.style.visibility = 'visible';
    });
  } else {
    navIcon.addEventListener('click', function () {
      console.log("opp")
      navIcon.src = 'assets/images/nav-icon.svg'; // Change back to the first image
      navbar.style.display = 'none';
      navIcon.style.display = 'block';
      navbar.style.visibility = 'visible';
    });
  }
}


//custom-cursor
const mask = document.querySelector(".h3-2");
var cursor = document.querySelector('#cursor');
var circle = document.querySelector('.circle');
var circleClr = document.querySelector('.circle-clr');
var home3 = document.querySelector('.home-3');
var home4 = document.querySelector('.home-4');
var scrollTopDiff = 0;
console.log(1, scrollTopDiff);

home3.addEventListener("mousemove", updateDotPosition);
home3.addEventListener("wheel", updateDotPosition);

// function updateDotPosition(dets){

//   gsap.to(cursor, {
//     x: dets.clientX-180,
//     y: dets.clientY-180,
//     duration: 0.2,
//     ease: Expo,
//     opacity: 1,
//   })
// }

// function updateDotPosition(dets){
//   document.documentElement.style.setProperty('--pointerX', e.clientX + "px");
//   document.documentElement.style.setProperty('--pointerY', e.clientY + "px");

// }


// const light = document.querySelector('.light');
// const roomPosition = { 
//     'top': home3.offsetTop,
//     'left': home3.offsetLeft
// };

// const topMargin = roomPosition.top + (window.innerHeight * Math.random());
// const position = {
//     left:  Math.random() * roomPosition.left,
//     top: topMargin + 150 < window.innerHeight ? topMargin : topMargin - 350
// };

// function update(e) {

//     var x = ( e.clientX - 150) || (e.touches[0].clientX - 150);
//     var y = (e.clientY - 150) || (e.touches[0].clientY - 150);

//     light.style.left = x + "px";
//     light.style.top = y + "px";

// }

// document.addEventListener('mousemove', update);
// document.addEventListener('touchmove', update);
// let size = 10;
function updateDotPosition(e){
  var rect = home3.getBoundingClientRect();
  let x = e.clientX;
  let y = e.clientY;
  var width = window.innerWidth;
  console.log(width);
  var mouseX, mouseY;
  mouseX = x - 80;
  mouseY = y - 80 -rect.top;
  if(width <= 768){
    mouseX = x - 50;
    mouseY = y - 50 -rect.top;
  }
  else if(width <= 1024){
    mouseX = x - 100;
    mouseY = y - 100 -rect.top;
  }
  else if(width <= 1280){
    mouseX = x - 120;
    mouseY = y - 120 -rect.top;
  }
  else if(width <= 1536){
    mouseX = x - 150;
    mouseY = y - 120 -rect.top;
  }
  
  // mouseX = x - 120;
  // mouseY = y - 100 -rect.top;

  gsap.set(mask, {
    maskPosition: `${mouseX}px ${mouseY}px`,
    webkitMaskPosition: `${mouseX}px ${mouseY}px`,
        ease: Expo,
        opacity: 1,
      })

}

// function updateSize() {
//   mask.style.maskSize = size + "px";
//   mask.style.webkitMaskSize = size + "px";

// }



// ARTIST COLLAB
class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
    this.prev = null;
  }
}

let items = document.querySelectorAll('.carousel-c .card');
let carousel = document.querySelector('.carousel-c');
let next = document.getElementById('next');
let prev = document.getElementById('prev');

// Convert items to a circular linked list
let head = null;
let tail = null;

for (let i = 0; i < items.length; i++) {
  let newNode = new Node(items[i]);

  if (!head) {
    head = newNode;
    tail = newNode;
  } else {
    tail.next = newNode;
    newNode.prev = tail;
    tail = newNode;
  }
}

tail.next = head; // Make the list circular
head.prev = tail;

let active = head;
var width = window.innerWidth;

let count = 0;
while(count<8){
  active = active.next;
  count++;
}

function loadshow() {
  console.log(active.element);

  active.element.style.transform = `none`;
  active.element.style.zIndex = 1;
  active.element.style.filter = 'none';
  active.element.style.opacity = 1;

  let stt = 0;
  let current = active.next;

  if(width<= 465){
    while (current !== head.prev) {
      stt++;
      current.element.style.transform = `translateX(${27 * stt}vw) scale(${1-0.2*stt}) perspective(16px) rotateY(-2deg)`;
      current.element.style.zIndex = -stt;
      current.element.style.filter = 'contrast(60%)';
      console.log(current.element, stt);
      current = current.next;
    }
  }
  else{
    let i = 0;
    // while (current !== head) {
    while (i < 2) {
      stt++;
      current.element.style.transform = `translateX(${12 * stt}vw) translateY(${3 * stt}vw)`;
      current.element.style.zIndex = -stt;
      current.element.style.filter = 'contrast(60%)';
      console.log(current.element, stt);
      current = current.next;
      i++;
    }
  }

  stt = 0;
  current = active.prev;
  if(width <= 465){
    while (current !== tail.next) {
      stt++;
      current.element.style.transform = `translateX(${-27 * stt}vw) scale(${1-0.2*stt}) perspective(16px) rotateY(2deg)`;
      current.element.style.zIndex = -stt;
      current.element.style.filter = 'contrast(60%)';
      console.log(current.element, stt);
      current = current.prev;
    }
  }
  else{
    let i = 0;
    // while (current !== tail) {
    while (i < 2) {
      stt++;
      current.element.style.transform = `translateX(${-12 * stt}vw) translateY(${3 * stt}vw)`;
      current.element.style.zIndex = -stt;
      current.element.style.filter = 'contrast(60%)';
      console.log(current.element, stt);
      current = current.prev;
      i++
    }
  }

}

loadshow();

next.onclick = function () {
  active = active.next;
  console.log(active.element);
  head = head.next;
  tail = tail.next;
  loadshow();
};

prev.onclick = function () {
  active = active.prev;
  head = head.prev;
  tail = tail.prev;
  loadshow();
};

// Touch slider functionality
if(width <= 465){
  let touchStartX = 0;
  let touchEndX = 0;
  
  carousel.addEventListener('touchstart', function (e) {
    touchStartX = e.touches[0].clientX;
  });
  
  carousel.addEventListener('touchmove', function (e) {
    touchEndX = e.touches[0].clientX;
  });
  
  carousel.addEventListener('touchend', function () {
    // Determine the swipe direction
    let deltaX = touchEndX - touchStartX;
  
    if (deltaX > 0) {
      // Swipe right
      active = active.prev;
      head = head.prev;
      tail = tail.prev;
      loadshow();
    } else if (deltaX < 0) {
      // Swipe left
      active = active.next;
      head = head.next;
      tail = tail.next;
      loadshow();
    }
  });
}


// //ourwork
// var tl = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".our-work-1",
//     scrub: 1,
//     end: "100%",
//     pin: true,
//   }
// });
// tl.add("start");
// tl.to(".vid-1",{
//   opacity: 0,
//   delay: 2,
//   duration: 2
// },"start")
// tl.from(".txt-container-1",{
//   opacity: 1,
//   duration: 3
// }, "start")
// tl.to(".txt-container-1",{
//   opacity: 0,
//   delay: 2,
//   duration: 2,
// }, "start")
// tl.set(".vid-1", {zIndex: -1})

// tl.add("start2")
// tl.from(".vid-2", {
//   scale: 0.9,
// }, "start2")
// tl.to(".vid-2", {
//   scale: 1,
//   y: -40
// }, "start2")
// tl.to(".txt-container-2",{
//   opacity: 1,
//   duration: 3
// }, "start2")
// tl.to(".vid-2", {
//   opacity: 0,
//   delay: 2,
//   duration: 2
// }, "start2")
// tl.to(".txt-container-2",{
//   opacity: 0,
//   delay: 2,
//   duration: 2
// }, "start2")
// tl.to(".vid-3", {
//   y: -20
// }, "start2")
// tl.to(".vid-4", {
//   y: -20
// }, "start2")
// tl.to(".vid-5", {
//   y: -20
// }, "start2")
// tl.set(".vid-2", {zIndex: -1})

// tl.add("start3")
// tl.from(".vid-3", {
//   scale: 0.8,
// }, "start3")
// tl.to(".vid-3", {
//   scale: 1,
//   y: -80
// }, "start3")
// tl.to(".txt-container-3",{
//   opacity: 1,
//   duration: 3
// }, "start3")
// tl.to(".vid-3", {
//   opacity: 0,
//   delay: 2,
//   duration: 2
// }, "start3")
// tl.to(".txt-container-3",{
//   opacity: 0,
//   delay: 2,
//   duration: 2
// }, "start3")
// tl.to(".vid-4", {
//   y: -70,
//   scale: 0.9
// }, "start3")
// tl.to(".vid-5", {
//   y: -70,
//   scale: 0.8
// }, "start3")
// tl.set(".vid-3", {zIndex: -1})

// tl.add("start4")
// tl.from(".vid-4", {
//   scale: 0.7,
// }, "start4")
// tl.to(".vid-4", {
//   scale: 1,
//   y: -110
// }, "start4")
// tl.to(".txt-container-4",{
//   opacity: 1,
//   duration: 3
// }, "start4")
// tl.to(".vid-4", {
//   opacity: 0,
//   delay: 2,
//   duration: 2
// }, "start4")
// tl.to(".txt-container-4",{
//   opacity: 0,
//   delay: 2,
//   duration: 2
// }, "start4")
// tl.to(".vid-5", {
//   y: -100,
//   scale: 0.9
// }, "start4")
// tl.set(".vid-4", {zIndex: -1})

// tl.add("start5")
// tl.from(".vid-5", {
//   scale: 0.6,
// }, "start5")
// tl.to(".vid-5", {
//   scale: 1,
//   y: -150
// }, "start5")
// tl.to(".txt-container-5",{
//   opacity: 1,
//   duration: 3
// }, "start5")
// tl.to(".vid-5", {
//   opacity: 0,
//   delay: 2,
//   duration: 2
// }, "start5")
// tl.to(".txt-container-5",{
//   opacity: 0,
//   delay: 2,
//   duration: 2
// }, "start5")
// tl.set(".vid-5", {zIndex: -1})


