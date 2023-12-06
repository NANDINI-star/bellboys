
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
  pin: true,
  scale: 1.2,
}, 'start')

tl.to(".two",{
  x: 500,
  y: -180,
  pin: true,
}, 'start')

tl.to(".three",{
  x: 170,
  y: 50,
  scale: 1.2,
  pin: true
}, 'start')

tl.to(".four",{
  x: -650,
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

tl.to(".team-txt",{
  opacity: 0
})

tl.to(".one",{
  x: 700,
  y: 500,
  delay: 1,
  opacity: 0,
  rotateY: 360,
  duration: 1,
}, 'start')
tl.to(".two",{
  x: -100,
  y: -130,
  delay: 1,
  opacity: 0,
  scale: 2,
  duration: 1
}, 'start')
tl.to(".three",{
  x: 300,
  y: 500,
  delay: 1,
  opacity: 0,
  rotateY: 360,
  duration: 1
}, 'start')

tl.to(".four",{
  x: 200,
  y: 500,
  delay: 1,
  opacity: 0,
  rotateY: 360,
  duration: 1
}, 'start')

tl.to(".five",{
  x: 200,
  y: 500,
  delay: 1,
  opacity: 0,
  rotateY: 360,
  duration: 1
}, 'start')


tl.to(".person-container",{
  opacity: 1,
  delay: -1
})