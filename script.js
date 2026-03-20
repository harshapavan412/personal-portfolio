const text = "Frontend Engineer • React • TypeScript • Scalable Systems";
let i = 0;

function typeEffect() {
  const el = document.querySelector(".typing");
  if (!el) return;

  if (i < text.length) {
    el.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeEffect, 40);
  }
}

function reveal() {
  document.querySelectorAll(".reveal").forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
}

window.onload = typeEffect;
window.addEventListener("scroll", reveal);