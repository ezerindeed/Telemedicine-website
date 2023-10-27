document.addEventListener('DOMContentLoaded', function() {
   const testimonials = document.querySelectorAll('.testimonial');
   const indicators = document.querySelectorAll('.indicator');
   let currentIndex = 0;

   function showTestimonial(index) {
      testimonials.forEach(testimonial => {
         testimonial.classList.remove('active');
      });
      testimonials[index].classList.add('active');

      indicators.forEach(indicator => {
         indicator.classList.remove('active');
      });
      indicators[index].classList.add('active');
   }

   function nextTestimonial() {
      currentIndex = (currentIndex + 1) % testimonials.length;
      showTestimonial(currentIndex);
   }

   // Add click event listeners to the indicators
   indicators.forEach((indicator, index) => {
      indicator.addEventListener('click', function() {
         showTestimonial(index);
         currentIndex = index;
      });
   });

   // Set an interval to switch testimonials
   setInterval(nextTestimonial, 5000);
   
   // Initially show the first testimonial
   showTestimonial(currentIndex);
});