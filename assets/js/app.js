
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

var cursor = document.querySelector('#cursor');
var circle = document.querySelector('.circle');
var circleClr = document.querySelector('.circle-clr');
var home3 = document.querySelector('.home-3');
var home4 = document.querySelector('.home-4');
var scrollTopDiff = 0;
console.log(1, scrollTopDiff);

home3.addEventListener("mousemove", updateDotPosition);

function updateDotPosition(dets){
  const elementRect2 = home3.getBoundingClientRect();

  gsap.to(cursor, {
    x: dets.clientX,
    y: (dets.clientY)+(elementRect2.top<0 ? Math.abs(elementRect2.top): -elementRect2.top),
    duration: 0.2,
    ease: Expo
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
  active = active.next !== null ? active.next : head;
  console.log(active.element);
  loadshow();
};

prev.onclick = function () {
  active = active.prev !== null ? active.prev : tail;
  loadshow();
};

//our work
let videos = document.querySelectorAll('video');
let projects = document.querySelectorAll('.content-details');
let videoContent = document.querySelector('.home-6');

console.log(videos);
let activeVid = 0;
function loadVideo() {
  console.log("activeVid", videos[activeVid]);
  videos[activeVid].style.transform = `none`;
  videos[activeVid].style.zIndex = 1;
  videos[activeVid].style.filter = 'none';
  videos[activeVid].style.opacity = 1;

  projects[activeVid].style.zIndex = 1;
  let stt = 0;
  for(var i = activeVid + 1; i< videos.length; i++){
    stt++;
    console.log(i, videos[i]);
    videos[i].style.transform = `translateY(${40*stt}px) scale(${1-0.1*stt})`;
    videos[i].style.zIndex = -stt;
    videos[i].style.filter = 'contrast(60%)';
  }
}

loadVideo();

// class Node {
//   constructor(video, project) {
//     this.video = video;
//     this.project = project;
//     this.next = null;
//   }
// }

// class CircularLinkedList {
//   constructor() {
//     this.head = null;
//     this.current = null;
//   }

//   add(video, project) {
//     const newNode = new Node(video, project);
//     if (!this.head) {
//       this.head = newNode;
//       this.head.next = this.head; // Circular reference
//       this.current = this.head;
//     } else {
//       let temp = this.head;
//       while (temp.next !== this.head) {
//         temp = temp.next;
//       }
//       temp.next = newNode;
//       newNode.next = this.head; // Circular reference
//     }
//   }

//   loadNextVideo() {
//     // Reset styles for all videos and projects
//     this.resetStyles();

//     // Apply styles for the current video
//     this.current.video.style.transform = 'none';
//     this.current.video.style.zIndex = 1;
//     this.current.video.style.filter = 'none';
//     this.current.video.style.opacity = 1;

//     this.current.project.style.zIndex = 1;

//     // Apply styles for the remaining videos in the list
//     let stt = 0;
//     let temp = this.current.next;
//     while (temp !== this.current) {
//       stt++;
//       temp.video.style.transform = `translateY(${40 * stt}px) scale(${1 - 0.1 * stt})`;
//       temp.video.style.zIndex = -stt;
//       temp.video.style.filter = 'contrast(60%)';
//       temp = temp.next;
//     }

//     // Move to the next video in the circular list
//     this.current = this.current.next;
//   }

//   resetStyles() {
//     let temp = this.head;
//     while (temp !== this.current) {
//       temp.video.style.transform = '';
//       temp.video.style.zIndex = '';
//       temp.video.style.filter = '';
//       temp.video.style.opacity = '';
//       temp.project.style.zIndex = '';
//       temp = temp.next;
//     }
//   }
// }

// // Example usage
// const circularList = new CircularLinkedList();

// document.querySelectorAll('.video video').forEach((video, index) => {
//   const project = document.querySelectorAll('.content-details')[index];
//   circularList.add(video, project);
// });

// // Initial load
// circularList.loadNextVideo();




// let scrollCount = 0;
function debounce(func, delay){
  let timeoutId;

  return function() {
    const context = this;
    const args = arguments;

    clearTimeout(timeoutId);
    timeoutId = setTimeout(function(){
      func.apply(context, args);
    }, delay);
  };
}
// function projFunc(event) {
//   // if(document.documentElement.scrollTop > 3000){
//     activeVid = activeVid + 1 < items.length ? activeVid + 1 : activeVid;
//     loadVideo();
//   // }
//   setTimeout(()=>{
//     scrollCount++;
//   }, 5000);
  
// // //   console.log(scrollCount);
// }
const projFunc = debounce(function() {

  activeVid = activeVid + 1 < items.length ? activeVid + 1 : activeVid;
  loadVideo();
  projects[activeVid].classList.add('fade-in');
  const animatedVideo = videos[activeVid];
  const scrollPosition = window.scrollY + window.innerHeight;
  const elementPosition = animatedVideo.offsetTop + animatedVideo.offsetHeight / 2;

  if (scrollPosition > elementPosition) {
      animatedVideo.classList.add('video-out');
  } else {
      animatedVideo.classList.remove('video-out');
  }
},90);

videoContent.addEventListener('wheel', projFunc);




