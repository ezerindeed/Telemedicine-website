//Navbar 
const navbar = document.getElementById("navbar");
const scrollThreshold = 100;

window.addEventListener("scroll", () => {
  if (window.scrollY > scrollThreshold) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

function toggleMenu() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.toggle("active");
}
