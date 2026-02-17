// Typing Effect
const text = "Front-End Engineer with Backend Architecture Expertise";
let index = 0;

function typeEffect() {
  const typingEl = document.querySelector(".typing");
  if (!typingEl) return;

  if (index < text.length) {
    typingEl.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, 50);
  }
}

// Mobile Menu
function setupMobileMenu() {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");
  if (!hamburger || !navLinks) return;

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  // Close menu after clicking a link (nice UX on mobile)
  navLinks.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => navLinks.classList.remove("active"));
  });
}

// Scroll Reveal
function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal");
  const windowHeight = window.innerHeight;

  reveals.forEach((reveal) => {
    const revealTop = reveal.getBoundingClientRect().top;
    if (revealTop < windowHeight - 100) {
      reveal.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);

// Run on load
window.addEventListener("DOMContentLoaded", () => {
  typeEffect();
  setupMobileMenu();
  revealOnScroll(); // ✅ triggers reveal immediately on first load
});
