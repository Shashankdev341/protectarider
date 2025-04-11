// script.js

// Smooth scroll for navigation links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 60,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Optional: alert on contact section (for demonstration)
  const contactSection = document.getElementById('contact');
  if (contactSection) {
    contactSection.addEventListener('mouseenter', () => {
      console.log('Looking to get in touch? Drop us a message!');
    });
  }
  