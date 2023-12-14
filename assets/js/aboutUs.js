ScrollTrigger.defaults({
  // toggleActions: "restart pause resume pause",
  scroller: ".about-us-desc"
})

gsap.fromTo(".clr-1", {color: 'white'},{
  scrollTrigger: ".ad-1",
  color: "#FFEB5B",
  delay: 1
})
gsap.fromTo(".clr-2", {color: 'white'},{
  scrollTrigger: ".ad-2",
  color: "#FFEB5B",
  delay: 1
})
gsap.fromTo(".clr-3", {color: 'white'},{
  scrollTrigger: ".ad-3",
  color: "#FFEB5B",
  delay: 1
})



