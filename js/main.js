// Function to add animations when elements are in the viewport
function addAnimations() {
  var elements = document.querySelectorAll('.animate-box');
  var windowHeight = window.innerHeight;

  elements.forEach(function(element) {
    var bounding = element.getBoundingClientRect();
    var offset = 100; // Adjust this offset as needed

    if (bounding.top - offset < windowHeight && bounding.bottom >= 0) {
      element.classList.add('animated');
      element.classList.add(element.getAttribute('data-animate-effect'));
    } else {
      element.classList.remove('animated');
      element.classList.remove(element.getAttribute('data-animate-effect'));
    }
  });
}

window.addEventListener('scroll', addAnimations);

window.addEventListener('load', addAnimations);

// Check if the viewport width is less than or equal to 768px
if (window.innerWidth <= 768) {
  // If it's a mobile device, change the data-animate-effect to "fadeInUp"
  var element = document.getElementById("hero-content");
  element.setAttribute("data-animate-effect", "fadeInUp");
}

// Check if the viewport width is less than or equal to 768px
if (window.innerWidth <= 768) {
  // If it's a mobile device, change the data-animate-effect to "fadeInUp"
  var element = document.getElementById("appointments-content");
  element.setAttribute("data-animate-effect", "fadeInUp");
}