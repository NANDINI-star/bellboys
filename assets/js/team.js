
var tl = gsap.timeline({
  scrollTrigger: {
    trigger: "body",
    scrub: 1,
    end: "200%",
    pin: true
  }
});
tl.add('start')
tl.to(".one",{
  x: 500,
  y: 200,

  scale: 1.2,
}, 'start')

tl.to(".two",{
  x: 500,
  y: -180,
}, 'start')

tl.to(".three",{
  x: 170,
  y: 50,
  scale: 1.2
}, 'start')

tl.to(".four",{
  x: -600,
  y: 140,
}, 'start')
tl.to(".five",{
  y: -240,
}, 'start')
tl.to(".six",{
  opacity: 0
}, 'start')

tl.to(".team-txt",{
  opacity: 1
}, 'start')

