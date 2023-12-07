
function handleNavClick() {
  const navIcon = document.querySelector('.nav-icon');
  const closeIcon = document.querySelector('.close-icon');
  const navbar = document.querySelector('.navbar');

  navIcon.addEventListener('click', function () {
    navbar.style.display = 'block';
    navIcon.style.display = 'none';
    closeIcon.style.visibility = 'visible';
    navbar.style.visibility = 'visible';
  });
}

function handleCloseNav(){
  const navIcon = document.querySelector('.nav-icon');
  const closeIcon = document.querySelector('.close-icon');
  const navbar = document.querySelector('.navbar');

  closeIcon.addEventListener('click', function () {
    navbar.style.display = 'none';
    navIcon.style.display = 'block';
  });
}

//custom-cursor
var cursor = document.querySelector('#cursor');
var circle = document.querySelector('.circle');
var circleClr = document.querySelector('.circle-clr');
var home3 = document.querySelector('.home-3');
var home4 = document.querySelector('.home-4');
var scrollTopDiff = 0;
console.log(1, scrollTopDiff);

home3.addEventListener("mousemove", updateDotPosition);

function updateDotPosition(dets){

  gsap.to(cursor, {
    x: dets.clientX-180,
    y: dets.clientY-180,
    duration: 0.2,
    ease: Expo,
    opacity: 1,
  })
}


class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
    this.prev = null;
  }
}

let items = document.querySelectorAll('.carousel .card');
let next = document.getElementById('next');
let prev = document.getElementById('prev');

// Convert items to a circular linked list
let head = null;
let tail = null;

for (let i = 0; i < items.length; i++) {
  let node = new Node(items[i]);

  if (!head) {
    head = node;
    tail = node;
  } else {
    tail.next = node;
    node.prev = tail;
    tail = node;
  }
}

tail.next = head; // Make the list circular
head.prev = tail;

let active = head;

let count = 0;
while(count<2){
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

  while (current !== head) {
    stt++;
    current.element.style.transform = `translateX(${200 * stt}px) translateY(${50 * stt}px)`;
    current.element.style.zIndex = -stt;
    current.element.style.filter = 'contrast(60%)';
    console.log(current.element, stt);
    current = current.next;
  }

  stt = 0;
  current = active.prev;

  while (current !== tail) {
    stt++;
    current.element.style.transform = `translateX(${-200 * stt}px) translateY(${50 * stt}px)`;
    current.element.style.zIndex = -stt;
    current.element.style.filter = 'contrast(60%)';
    console.log(current.element, stt);
    current = current.prev;
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

//ourwork
var tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".our-work-1",
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
  duration: 2
}, "start5")
tl.to(".txt-container-5",{
  opacity: 0,
  delay: 2,
  duration: 2
}, "start5")
tl.set(".vid-5", {zIndex: -1})


