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