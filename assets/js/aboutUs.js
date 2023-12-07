var descs = document.querySelectorAll(".au-desc");
var tl = gsap.timeline({
  scrollTrigger: {
    trigger: "body",
    scrub: 1,
    end: "50%",
    pin: true,

  }
});

descs.forEach((element, i) => {
  tl.from(".clr", {color: "white", fontStyle: "normal"})
  tl.to(element, {
    y: -461*i,
    duration: 3
  });
  
  tl.to(".clr", {color: "#FFEB5B", duration: 3, fontStyle: "italic"});
});