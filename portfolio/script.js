// ===============================
// Accessibility: Respect Reduced Motion
// ===============================

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// ===============================
// Dark Mode Auto-Detect + Toggle

const toggleBtn = document.getElementById("themeToggle");
const html = document.documentElement;
const contactEmail = "contact@muoyoemiko.dev";

// Detect system preference
const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

// Check localStorage first
let savedTheme = localStorage.getItem("theme");

if (savedTheme) {
  html.setAttribute("data-bs-theme", savedTheme);
} else {
  html.setAttribute("data-bs-theme", systemPrefersDark ? "dark" : "light");
}

// Update toggle icon
function updateToggleIcon() {
  if (!toggleBtn) return;

  if (html.getAttribute("data-bs-theme") === "dark") {
    toggleBtn.textContent = "☀️";
  } else {
    toggleBtn.textContent = "🌙";
  }
}

updateToggleIcon();

// Toggle click
if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    let currentTheme = html.getAttribute("data-bs-theme");
    let newTheme = currentTheme === "dark" ? "light" : "dark";

    html.setAttribute("data-bs-theme", newTheme);
    localStorage.setItem("theme", newTheme);

    updateToggleIcon();
  });
}


// ===============================
// Scroll-Triggered Animations
// ===============================

// Animate sections with .animate-on-scroll when they enter viewport
const animateElements = document.querySelectorAll('.animate-on-scroll');

const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.2 // trigger when 20% visible
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animated');
      observer.unobserve(entry.target); // animate once
    }
  });
}, observerOptions);

animateElements.forEach(el => observer.observe(el));

// ===============================
// Active Navbar Highlight
// ===============================

const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

function activateNav() {
  let scrollPos = window.scrollY + 100; // offset for fixed navbar
  sections.forEach(section => {
    if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${section.id}`) {
          link.classList.add('active');
        }
      });
    }
  });
}

window.addEventListener('scroll', activateNav);

// ===============================
// Hero Typing Animation
// ===============================

const typingElement = document.getElementById("typing-text");

const roles = [
  "Frontend Developer",
  "Backend Developer",
  "Problem Solver",
  "UI Enthusiast"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentRole = roles[roleIndex];
  
  if (isDeleting) {
    typingElement.textContent = currentRole.substring(0, charIndex--);
  } else {
    typingElement.textContent = currentRole.substring(0, charIndex++);
  }

  let typingSpeed = isDeleting ? 50 : 100;

  if (!isDeleting && charIndex === currentRole.length + 1) {
    typingSpeed = 1500; // pause before deleting
    isDeleting = true;
  } 
  else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    typingSpeed = 300;
  }

  setTimeout(typeEffect, typingSpeed);
}

// Start typing effect
if (typingElement && !prefersReducedMotion) {
  typeEffect();
}

// ===============================
// Interactive Network Particles
// ===============================

const canvas = document.getElementById("particles");
let particlesAnimationId;
let animateParticles = null;

if (canvas && !prefersReducedMotion) {
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let particlesArray = [];
  const mouse = {
    x: null,
    y: null,
    radius: 120
  };

  window.addEventListener("mousemove", (event) => {
    mouse.x = event.x;
    mouse.y = event.y;
  });

  class Particle {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = 2;
      this.speedX = Math.random() * 0.6 - 0.3;
      this.speedY = Math.random() * 0.6 - 0.3;
    }

    update() {
      this.x += this.speedX;
      this.y += this.speedY;

      if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
      if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
    }

    draw() {
      ctx.fillStyle = "rgba(255,255,255,0.7)";
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  function initParticles() {
    particlesArray = [];
    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 40 : 100;

    for (let i = 0; i < particleCount; i++) {
      particlesArray.push(new Particle());
    }
  }

  function connectParticles() {
    for (let a = 0; a < particlesArray.length; a++) {
      for (let b = a; b < particlesArray.length; b++) {
        let dx = particlesArray[a].x - particlesArray[b].x;
        let dy = particlesArray[a].y - particlesArray[b].y;
        let distance = dx * dx + dy * dy;

        if (distance < 10000) {
          ctx.strokeStyle = "rgba(255,255,255,0.1)";
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
          ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
          ctx.stroke();
        }
      }

      // Mouse interaction
      let dx = particlesArray[a].x - mouse.x;
      let dy = particlesArray[a].y - mouse.y;
      let mouseDistance = dx * dx + dy * dy;

      if (mouseDistance < mouse.radius * mouse.radius) {
        ctx.strokeStyle = "rgba(255,255,255,0.3)";
        ctx.beginPath();
        ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
        ctx.lineTo(mouse.x, mouse.y);
        ctx.stroke();
      }
    }
  }

  animateParticles = function() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particlesArray.forEach(particle => {
      particle.update();
      particle.draw();
    });

    connectParticles();
    particlesAnimationId = requestAnimationFrame(animateParticles);
  };

  initParticles();
  animateParticles();

  window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initParticles();
  });

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      cancelAnimationFrame(particlesAnimationId);
    } else if (animateParticles) {
      animateParticles();
    }
  });
}


// ===============================
// Subtle Hero Parallax
// ===============================

const heroContent = document.getElementById("hero-content");

if (!prefersReducedMotion) {
  let ticking = false;

  window.addEventListener("scroll", () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        if (heroContent) {
          heroContent.style.transform = `translateY(${window.scrollY * 0.3}px)`;
        }
        ticking = false;
      });
      ticking = true;
    }
  });
}

// ===============================
// Navbar Shadow on Scroll
// ===============================

const navbar = document.querySelector(".glass-navbar");

window.addEventListener("scroll", () => {
  if (!navbar) return;

  if (window.scrollY > 50) {
    navbar.classList.add("navbar-scrolled");
  } else {
    navbar.classList.remove("navbar-scrolled");
  }
});

// ===============================
// Stagger Reveal Animation
// ===============================

const revealItems = document.querySelectorAll(".reveal-item");

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {

      const items = entry.target.querySelectorAll(".reveal-item");

      items.forEach((item, index) => {
        setTimeout(() => {
          item.classList.add("active");
        }, index * 150); // stagger delay
      });

      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

// Apply observer to sections
document.querySelectorAll("section").forEach(section => {
  revealObserver.observe(section);
});

const navbarCollapse = document.querySelector(".navbar-collapse");

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    if (navbarCollapse && navbarCollapse.classList.contains("show")) {
      new bootstrap.Collapse(navbarCollapse).hide();
    }
  });
});

// ===============================
// Hover Tilt Effect
// ===============================

const tiltCards = document.querySelectorAll(".tilt-card");

tiltCards.forEach(card => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / 20) * -1;
    const rotateY = (x - centerX) / 20;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateX(0) rotateY(0)";
  });
});

// ===============================
// Contact Form
// ===============================

const contactForm = document.getElementById('contactForm');
const contactStatus = document.getElementById('contactStatus');

if (contactForm) {
  contactForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const name = formData.get('name')?.toString().trim() || 'Portfolio visitor';
    const email = formData.get('email')?.toString().trim() || '';
    const message = formData.get('message')?.toString().trim() || '';
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\nFrom: ${name}\nEmail: ${email}`);

    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;

    if (contactStatus) {
      contactStatus.textContent = 'Your email app should open with a drafted message.';
    }
  });
}

// ===============================
// Dynamic Copyright Year
// ===============================

document.addEventListener('DOMContentLoaded', () => {
  const year = new Date().getFullYear();
  const footer = document.querySelector('footer small');
  if (footer) {
    footer.innerHTML = `&copy; ${year} Muoyo Emiko. All Rights Reserved.`;
  }
});
