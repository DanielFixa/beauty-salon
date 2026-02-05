import './style.css'

// Pre-loader Removal
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  if (loader) {
    gsap.to(loader, {
      opacity: 0,
      duration: 1,
      ease: 'power2.inOut',
      onComplete: () => {
        loader.style.display = 'none';
        document.body.style.overflow = 'auto';
      }
    });
  }
});

// Header Scroll Effect
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// GSAP Animations
document.addEventListener('DOMContentLoaded', () => {
  // Reveal type animation
  gsap.from('.reveal-type', {
    y: 100,
    opacity: 0,
    duration: 1.5,
    ease: 'power4.out',
    stagger: 0.2
  });

  gsap.from('.hero-subtitle', {
    y: 50,
    opacity: 0,
    duration: 1.2,
    delay: 0.5,
    ease: 'power3.out'
  });

  gsap.from('.hero-btns', {
    y: 30,
    opacity: 0,
    duration: 1,
    delay: 0.8,
    ease: 'power3.out'
  });

  // Scroll Animations for sections
  gsap.utils.toArray('.service-card').forEach((card, i) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: 'top 85%',
        toggleActions: 'play none none none'
      },
      y: 60,
      opacity: 0,
      duration: 1,
      delay: i * 0.1,
      ease: 'power3.out'
    });
  });

  gsap.from('.about-image', {
    scrollTrigger: {
      trigger: '.about',
      start: 'top 80%'
    },
    x: -100,
    opacity: 0,
    duration: 1.5,
    ease: 'power4.out'
  });

  gsap.from('.about-content', {
    scrollTrigger: {
      trigger: '.about',
      start: 'top 80%'
    },
    x: 100,
    opacity: 0,
    duration: 1.5,
    ease: 'power4.out'
  });

  // Location Animation
  gsap.from('.location-info', {
    scrollTrigger: {
      trigger: '.location',
      start: 'top 80%'
    },
    y: 50,
    opacity: 0,
    duration: 1.2,
    ease: 'power3.out'
  });

  gsap.from('.map-container', {
    scrollTrigger: {
      trigger: '.location',
      start: 'top 80%'
    },
    scale: 0.9,
    opacity: 0,
    duration: 1.5,
    ease: 'power2.out'
  });
});

// Mobile Menu Logic
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');

    // Change icon
    const icon = menuToggle.querySelector('ion-icon');
    if (icon) {
      icon.name = icon.name === 'menu-outline' ? 'close-outline' : 'menu-outline';
    }
  });
}

// Close menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    const icon = menuToggle.querySelector('ion-icon');
    if (icon) icon.name = 'menu-outline';
  });
});

// Simple Booking Form Handler
const bookingBtn = document.querySelector('.booking-form-wrapper button');
if (bookingBtn) {
  bookingBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const inputs = document.querySelectorAll('.booking-form-wrapper input, .booking-form-wrapper select');
    let allFilled = true;

    inputs.forEach(input => {
      if (!input.value || input.value.includes('Selecione')) {
        allFilled = false;
      }
    });

    if (allFilled) {
      alert('Reserva enviada com sucesso! Entraremos em contato em breve.');
      inputs.forEach(input => input.value = '');
    } else {
      alert('Por favor, preencha todos os campos do formulário.');
    }
  });
}
