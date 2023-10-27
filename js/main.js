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

// Add event listener to call addAnimations when the page is scrolled
window.addEventListener('scroll', addAnimations);

// Initial call to addAnimations when the page loads
window.addEventListener('load', addAnimations);