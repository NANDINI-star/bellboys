

ScrollTrigger.matchMedia({
  "(min-width: 476px)": () => {
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
      delay: -3
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
      top: "4vw",
      left: "31vw",
    }, 'start1')
    
    tl4.to(".two",{
      top: "-2vw",
      left: "37vw"
    }, 'start1')
    
    tl4.to(".three",{
      top: "3.5vw",
      left: "56vw"
    }, 'start1')
    
    tl4.to(".four",{
      top: "5.5vw",
      left: "23vw"
    }, 'start1')
    
    tl4.to(".five",{
      top: "4.5vw",
      left: "69vw"
    }, 'start1')
    
    tl4.to(".six",{
      // opacity: 0
      top: "8vw",
      left: "79vw"
    }, 'start1')

    tl4.to(".seven",{
      // opacity: 0
      top: "7.5vw",
      left: "15vw"
    }, 'start1')

    tl4.to(".team-txt", {
      opacity: 1,
      duration: 5
    })
    // tl4.to(".team-txt", {
    //   opacity: 0
    // })
  },
  "(max-width: 475px)": () => {
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
    tl1.to(".one",{
      x: 400,
      y: 200,
      delay: 1,
      opacity: 0,
      rotateY: 360,
      duration: 10
    }, 'start')
    tl1.to(".two",{
      x: '-30vw',
      y: '7vw',
      delay: 1,
      opacity: 0,
      scale: 2,
      duration:8
    }, 'start')
    tl1.to(".three",{
      x: 300,
      y: 200,
      delay: 1,
      opacity: 0,
      rotateY: 360,
      duration: 10
    }, 'start')
    
    tl1.to(".four",{
      x: 200,
      y: 200,
      delay: 1,
      opacity: 0,
      rotateY: 360,
      duration: 10
    }, 'start')
    tl1.to(".five",{
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
    
    tl.add('start1')
    tl.to(".one", {
      top: "15vw",
      left: "8vw",
    }, 'start1')
    
    tl.to(".two",{
      top: "15vw",
      left: "23vw",
      scale: 1.2
    }, 'start1')
    
    tl.to(".three",{
      top: "15vw",
      left: "41vw",
      scale: 1.6
    }, 'start1')
    
    tl.to(".four",{
      top: "15vw",
      left: "58vw",
      scale: 1.2
    }, 'start1')
    
    tl.to(".five",{
      top: "15vw",
      left: "72vw"
    }, 'start1')

  }
})