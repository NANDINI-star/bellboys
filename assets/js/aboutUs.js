window.addEventListener('scroll', () => {
  console.log("scrolling")
  document.body.style.setProperty('--scroll',window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
}, false);