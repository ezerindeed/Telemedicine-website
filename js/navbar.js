window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 0) {
      navbar.classList.add('sticky');
    } else {
      navbar.classList.remove('sticky');
    }
  });

  function toggleMenu() {
    var menu = document.getElementById("nav-menu");
    var menuIcon = document.getElementById("nav-menu-icon");
    
    if (menu.classList.contains("active")) {
      menu.classList.remove("active");
      menuIcon.classList.remove("active");
    } else {
      menu.classList.add("active");
      menuIcon.classList.add("active");
    }
  }
  