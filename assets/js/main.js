// Menu mobile
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('is-open');
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => navLinks.classList.remove('is-open'));
  });
}

// Bouton WhatsApp flottant (present sur toutes les pages)
const waBtn = document.createElement('a');
waBtn.href = 'https://wa.me/237653834302';
waBtn.target = '_blank';
waBtn.rel = 'noopener';
waBtn.className = 'whatsapp-float';
waBtn.setAttribute('aria-label', 'Contactez-nous sur WhatsApp');
waBtn.innerHTML = '<i class="fa-brands fa-whatsapp"></i>';
document.body.appendChild(waBtn);

// Slider hero (page d'accueil)
const slider = document.querySelector('.hero-slider');

if (slider) {
  const slides = Array.from(slider.querySelectorAll('.hero-slide'));
  const dotsWrap = document.querySelector('.hero-dots');
  const prevBtn = document.querySelector('.hero-arrow.prev');
  const nextBtn = document.querySelector('.hero-arrow.next');
  let current = 0;
  let timer = null;
  const intervalMs = 5000;

  const dots = slides.map((_, i) => {
    const dot = document.createElement('button');
    dot.className = 'hero-dot';
    dot.type = 'button';
    dot.setAttribute('aria-label', `Aller à l'image ${i + 1}`);
    dot.addEventListener('click', () => goTo(i));
    dotsWrap?.appendChild(dot);
    return dot;
  });

  function render() {
    slides.forEach((slide, i) => slide.classList.toggle('is-active', i === current));
    dots.forEach((dot, i) => dot.classList.toggle('is-active', i === current));
  }

  function goTo(index) {
    current = (index + slides.length) % slides.length;
    render();
    resetTimer();
  }

  function next() { goTo(current + 1); }
  function prev() { goTo(current - 1); }

  function resetTimer() {
    if (timer) clearInterval(timer);
    timer = setInterval(next, intervalMs);
  }

  nextBtn?.addEventListener('click', next);
  prevBtn?.addEventListener('click', prev);

  render();
  resetTimer();
}

// Apparition au scroll (reveal), appliquee automatiquement aux blocs recurrents
const revealSelectors = [
  '.section-head',
  '.card',
  '.enterprise-card',
  '.gallery-item',
  '.cta-banner',
  '.contact-info-list li',
  '.stats-band .grid-4 > div',
];
const revealEls = document.querySelectorAll(revealSelectors.join(','));

if (revealEls.length && 'IntersectionObserver' in window) {
  revealEls.forEach((el, i) => {
    el.classList.add('reveal');
    el.style.transitionDelay = `${(i % 4) * 90}ms`;
  });

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  revealEls.forEach((el) => revealObserver.observe(el));
}

// Formulaire de contact (front-end uniquement, pas de backend)
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // TODO: brancher un service d'envoi (Formspree, EmailJS, etc.) quand disponible.
    const feedback = contactForm.querySelector('.form-feedback');
    if (feedback) {
      feedback.textContent = 'Merci ! Votre message a bien été préparé. Utilisez le bouton "Envoyer par email" ci-dessous pour le transmettre.';
    }
  });
}
