document.addEventListener("DOMContentLoaded", function () {
  var loaderWrapper = document.getElementById("loader-wrapper");
  
  // You can add more image elements to the array if needed
  var images = document.querySelectorAll("img");

  var imagesLoaded = 0;
  var totalImages = images.length;

  function imageLoaded() {
      imagesLoaded++;

      if (imagesLoaded === totalImages) {
          loaderWrapper.style.display = "none"; // Hide the loader when all images are loaded
      }
  }

  images.forEach(function (image) {
      if (image.complete) {
          imageLoaded();
      } else {
          image.addEventListener("load", imageLoaded);
      }
  });
});

console.log(window.innerHeight);
const innerHeight = window.innerHeight;
ScrollTrigger.matchMedia({
  "screen and (min-width: 476px)": () => {
    const tl4 = gsap.timeline({
      delay: 1,
    });
    
    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: "body",
        scrub: 1,
        start: 'top top',
        end: '+=250',
        pin: true,
      }
    });

    tl2.to(".one",{
      x: 400,
      y: 200,
      delay: 1,
      opacity: 0,
      rotateY: 360,
      duration: 10
    }, 'start')
    console.log(innerHeight-500)
    tl2.to(".two",{
      x: '-30vw',
      y: '7vw',
      delay: 1,
      opacity: 0,
      scale: 2,
      duration:8
    }, 'start')
    tl2.to(".three",{
      x: 300,
      y: 200,
      delay: 1,
      opacity: 0,
      rotateY: 360,
      duration: 10
    }, 'start')
    
    tl2.to(".four",{
      x: 200,
      y: 200,
      delay: 1,
      opacity: 0,
      rotateY: 360,
      duration: 10
    }, 'start')
    
    tl2.to(".five",{
      x: 200,
      y: 200,
      delay: 1,
      opacity: 0,
      rotateY: 360,
      duration: 10
    }, 'start')
    tl2.to(".six",{
      x: 200,
      y: 200,
      delay: 1,
      opacity: 0,
      rotateY: 360,
      duration: 10
    }, 'start')
    tl2.to(".seven",{
      x: 200,
      y: 200,
      delay: 1,
      opacity: 0,
      rotateY: 360,
      duration: 10
    }, 'start')
    
    
    tl2.to(".person-container1",{
      opacity: 1,
      delay: -3,
      zIndex: 4
    })
    tl2.to(".person-container",{
      opacity: 1,
      delay: -3
    })
    tl2.to(".person-container-flip",{
      opacity: 1,
      delay: -3
    })
    
    tl4.add('start1')
    tl4.to(".one", {
      // top: "4vw",
      top: "1vw",
      left: "25vw",
    }, 'start1')
    
    tl4.to(".two",{
      // top: "-2vw",
      top: "2vw",
      left: "38vw"
    }, 'start1')
    
    tl4.to(".three",{
      // top: "3.5vw",
      top: "6.5vw",
      left: "55vw"
    }, 'start1')
    
    tl4.to(".four",{
      // top: "5.5vw",
      top: "7vw",
      left: "19vw"
    }, 'start1')
    
    tl4.to(".five",{
      top: "6.8vw",
      // top: "4.5vw",
      left: "68vw"
    }, 'start1')
    
    tl4.to(".six",{
      // opacity: 0
      // top: "8vw",
      top: "7vw",
      left: "78vw"
    }, 'start1')

    tl4.to(".seven",{
      // opacity: 0
      top: "7.8vw",
      left: "10.5vw"
    }, 'start1')

    tl4.to(".team-txt", {
      opacity: 1,
      duration: 5,
      top: "55vh",

    })
    // tl4.to(".team-txt", {
    //   opacity: 0
    // })
  },
  "screen and (max-width: 475px)": () => {
    const tl = gsap.timeline({
      delay: 1,
    });
    const tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: "body",
        scrub: 1,
        start: 'top top',
        end: '+=250',
        pin: true,
      }
    });
    tl.from(".one", {
      scale:0
      // scale:1
    }, "start2")
    tl1.to(".one",{
      x: 400,
      y: 200,
      delay: 1,
      opacity: 0,
      rotateY: 360,
      duration: 10
    }, 'start')
    tl.from(".two", {
      scale:0
      // scale:0.8
    }, "start2")
    tl1.to(".two",{
      x: '-30vw',
      y: '7vw',
      delay: 1,
      opacity: 0,
      // scale: 2,
      duration:8
    }, 'start')
    tl.from(".three", {
      // scale:0.8
      scale:0
    }, "start2")
    tl1.to(".three",{
      x: 300,
      y: 200,
      delay: 1,
      opacity: 0,
      rotateY: 360,
      duration: 10
    }, 'start')
    tl.from(".four", {
      // scale:0.8
      scale:0
    }, "start2")
    tl1.to(".four",{
      x: 200,
      y: 200,
      delay: 1,
      opacity: 0,
      rotateY: 360,
      duration: 10
    }, 'start')
    tl.from(".five", {
      // scale:0.8
      scale:0
    }, "start2")
    tl1.to(".five",{
      x: 200,
      y: 200,
      delay: 1,
      opacity: 0,
      rotateY: 360,
      duration: 10
    }, 'start')
    tl.from(".six", {
      // scale:0.8
      scale:0
    }, "start2")
    tl1.to(".six",{
      x: 200,
      y: 200,
      delay: 1,
      opacity: 0,
      rotateY: 360,
      duration: 10
    }, 'start')
    tl.from(".seven", {
      // scale:0.7
      scale:0
    }, "start2")
    tl1.to(".seven",{
      x: 200,
      y: 200,
      delay: 1,
      opacity: 0,
      rotateY: 360,
      duration: 10
    }, 'start')

    tl1.to(".person-container2",{
      opacity: 1,
      delay: -3
    })
    tl1.to(".person-container-flip2",{
      opacity: 1,
      delay: -3
    })
    tl1.to(".person-container-flip2-other",{
      opacity: 1,
      delay: -3
    })
    
    tl.add('start1')
    tl.to(".one", {
      top: "12vw",
      left: "25vw",
      scale: 1.2
    }, 'start1')
    // tl.from(".two",{
    //   scale: 1.8
    // }, 'start1')
    tl.to(".two",{
      top: "15vw",
      left: "41vw",
      scale: 1.4
    }, 'start1')
    
    tl.to(".three",{
      top: "17vw",
      left: "56vw",
      scale: 1.1
    }, 'start1')
    
    tl.to(".four",{
      top: "15vw",
      left: "16vw",
      // scale: 1.2
    }, 'start1')
    
    tl.to(".five",{
      top: "14vw",
      left: "69vw"
    }, 'start1')

    tl.to(".six",{
      top: "13vw",
      left: "82vw"
    }, 'start1')
    tl.to(".seven",{
      top: "14vw",
      left: "4vw"
    }, 'start1')

  },

})