
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