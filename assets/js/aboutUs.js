// ScrollTrigger.defaults({
//   // toggleActions: "restart pause resume pause",
//   scroller: ".about-us-desc"
// })

// function scrollNext(){
//   console.log("scrollNext")
//   gsap.fromTo(".ad-0",{y:0}, {
//     y:"-50vh"
//   })
//   gsap.fromTo(".ad-1", {y:0},{y: "-50vh"})
//   gsap.fromTo(".clr-1", {color: 'white'},{
//     // scrollTrigger: ".ad-1",
//     color: "#FFEB5B",
//     delay: 1
//   })
//   gsap.to(".ad-2", {y: "-100vh", delay: 1.5}, "start1")
//   gsap.fromTo(".clr-2", {color: 'white'},{
//     // scrollTrigger: ".ad-2",
//     color: "#FFEB5B",
//     delay: 2
//   }, "start1")
//   gsap.to(".ad-3", {y: "-150vh", delay: 2.5}, "start2")
//   gsap.fromTo(".clr-3", {color: 'white'},{
//     // scrollTrigger: ".ad-3",
//     color: "#FFEB5B",
//     delay: 3
//   }, "start2")
//   // gsap.to(".ad-3", {y: "50vh", delay: 3.5}, "start3")
//   // gsap.fromTo(".clr-3", {color: 'white'},{
//   //   // scrollTrigger: ".ad-3",
//   //   color: "#FFEB5B",
//   //   delay: 4
//   // }, "start3")
//   // gsap.to(".ad-2", {y: "100vh", delay: 4.5}, "start4")
//   // gsap.fromTo(".clr-2", {color: 'white'},{
//   //   // scrollTrigger: ".ad-2",
//   //   color: "#FFEB5B",
//   //   delay: 5
//   // }, "start4")
//   // gsap.to(".ad-1", {y: "150vh", delay: 5.5}, "start5")
//   // gsap.fromTo(".clr-1", {color: 'white'},{
//   //   // scrollTrigger: ".ad-1",
//   //   color: "#FFEB5B",
//   //   delay: 6
//   // }, "start5")
// }

// // gsap.to(".ad-0", {
// //   y:"-50vh"
// // })
// // gsap.to(".ad-1", {y: "-50vh"})
// // gsap.fromTo(".clr-1", {color: 'white'},{
// //   // scrollTrigger: ".ad-1",
// //   color: "#FFEB5B",
// //   delay: 1
// // })
// // gsap.to(".ad-2", {y: "-100vh", delay: 1.5}, "start1")
// // gsap.fromTo(".clr-2", {color: 'white'},{
// //   // scrollTrigger: ".ad-2",
// //   color: "#FFEB5B",
// //   delay: 2
// // }, "start1")
// // gsap.to(".ad-3", {y: "-150vh", delay: 2.5}, "start2")
// // gsap.fromTo(".clr-3", {color: 'white'},{
// //   // scrollTrigger: ".ad-3",
// //   color: "#FFEB5B",
// //   delay: 3
// // }, "start2")
// // gsap.to(".ad-3", {y: "50vh", delay: 3.5}, "start3")
// // gsap.fromTo(".clr-3", {color: 'white'},{
// //   // scrollTrigger: ".ad-3",
// //   color: "#FFEB5B",
// //   delay: 4
// // }, "start3")
// // gsap.to(".ad-2", {y: "100vh", delay: 4.5}, "start4")
// // gsap.fromTo(".clr-2", {color: 'white'},{
// //   // scrollTrigger: ".ad-2",
// //   color: "#FFEB5B",
// //   delay: 5
// // }, "start4")
// scrollNext();
// setInterval(scrollNext, 10000);

// gsap.fromTo(".clr-1", {color: 'white'},{
//   scrollTrigger: ".ad-1",
//   color: "#FFEB5B",
//   delay: 1
// })
// gsap.fromTo(".clr-2", {color: 'white'},{
//   scrollTrigger: ".ad-2",
//   color: "#FFEB5B",
//   delay: 1
// })
// gsap.fromTo(".clr-3", {color: 'white'},{
//   scrollTrigger: ".ad-3",
//   color: "#FFEB5B",
//   delay: 1
// })

var width = window.innerWidth;
let gsap_au = gsap.timeline({});
console.log(width > 435);

if(width > 435) {
  console.log("here");
  function loop(){
    // gsap_au.fromTo(".ad-0", {y: 0}, {y: "-50vh"})
    gsap_au.fromTo(".ad-1", {y: "50vh"}, {y: "-50vh", delay: 1})
    gsap_au.fromTo(".clr-1", {color: 'white'},{
      // scrollTrigger: ".ad-1",
      color: "#FFEB5B",
      delay: 0.5
    })
    // gsap_au.fromTo(".ad-1", {y: "0vh"}, {y: "-50vh"})
    gsap_au.fromTo(".ad-2", {y: "100vh"}, {y: "-100vh", delay: 1})
    gsap_au.fromTo(".clr-2", {color: 'white'},{
      // scrollTrigger: ".ad-2",
      color: "#FFEB5B",
      delay: 0.5
    })
    // gsap_au.fromTo(".ad-2", {y: "0vh"}, {y: "-50vh"})
    gsap_au.fromTo(".ad-3", {y: "150vh"}, {y: "-150vh", delay: 1})
    gsap_au.fromTo(".clr-3", {color: 'white'},{
      // scrollTrigger: ".ad-3",
      color: "#FFEB5B",
      delay: 0.5
    })
    gsap_au.fromTo(".ad-3", {y: "0vh"}, {y: "-50vh"})
  }
  loop();
  setInterval(loop, 8000);

  
}

else{
  // console.log("here also")
  function loop2(){
    // gsap_au.fromTo(".ad-0", {y: 0}, {y: "-50vh"})
    console.log("inside mobile about us")
    gsap_au.fromTo(".ad-1", {y: "17vh"}, {y: "-17vh", delay: 1})
    gsap_au.fromTo(".clr-1", {color: 'white'},{
      // scrollTrigger: ".ad-1",
      color: "#FFEB5B",
      delay: 0.5
    })
    // gsap_au.fromTo(".ad-1", {y: "0vh"}, {y: "-50vh"})
    gsap_au.fromTo(".ad-2", {y: "34vh"}, {y: "-34vh", delay: 1})
    gsap_au.fromTo(".clr-2", {color: 'white'},{
      // scrollTrigger: ".ad-2",
      color: "#FFEB5B",
      delay: 0.5
    })
    // gsap_au.fromTo(".ad-2", {y: "0vh"}, {y: "-50vh"})
    gsap_au.fromTo(".ad-3", {y: "51vh"}, {y: "-51vh", delay: 1})
    gsap_au.fromTo(".clr-3", {color: 'white'},{
      // scrollTrigger: ".ad-3",
      color: "#FFEB5B",
      delay: 0.5
    })
    // gsap_au.fromTo(".ad-3", {y: "0vh"}, {y: "-50vh"})
  }
  loop2();
  setInterval(loop2, 8000);
}

