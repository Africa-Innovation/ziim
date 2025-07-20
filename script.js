// Navigation fixe au scroll
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Animation des cartes de récompenses
document.querySelectorAll('.reward-card').forEach(card => {
  card.addEventListener('mouseenter', function() {
    this.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.2)';
  });
  card.addEventListener('mouseleave', function() {
    this.style.boxShadow = 'none';
  });
});


// Animation au scroll
document.addEventListener('DOMContentLoaded', function() {
  // Animation des éléments
  const animateOnScroll = () => {
    const elements = document.querySelectorAll('.design-card, .reward-card');
    
    elements.forEach(el => {
      const elPosition = el.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;
      
      if(elPosition < screenPosition) {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }
    });
  };
  
  // Initial state
  document.querySelectorAll('.design-card, .reward-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease';
  });
  
  window.addEventListener('scroll', animateOnScroll);
  animateOnScroll(); // Trigger on load
  
  // Smooth scrolling for navigation
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
});