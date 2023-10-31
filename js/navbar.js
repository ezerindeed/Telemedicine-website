window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 0) {
      navbar.classList.add('sticky');
    } else {
      navbar.classList.remove('sticky');
    }
  });

  const navIcon = document.getElementById('nav-icon');
  const navMenu = document.getElementById('nav-menu');
  
  navIcon.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });

  navIcon.addEventListener('click', () => {
    navMenu.classList.toggle('cancel');
  
    if (navMenu.classList.contains('cancel')) {
      navIcon.innerHTML = '&#10005;';
    } else {
      navIcon.innerHTML = '&#9776;';
    }
  });