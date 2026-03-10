const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const navItems = navLinks.querySelectorAll("a");
const contactForm = document.getElementById("contactForm");
const revealItems = document.querySelectorAll(".reveal");

function closeMenu() {
  navLinks.classList.remove("is-open");
  menuToggle.classList.remove("is-open");
  menuToggle.setAttribute("aria-expanded", "false");
}

menuToggle.addEventListener("click", function () {
  const isOpen = navLinks.classList.toggle("is-open");
  menuToggle.classList.toggle("is-open", isOpen);
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

navItems.forEach(function (item) {
  item.addEventListener("click", closeMenu);
});

function showProjectAlert(event, label) {
  event.preventDefault();
  alert(label + " is a placeholder action. Replace it with your live portfolio, case study, or external link.");
}

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const name = document.getElementById("name").value.trim() || "there";
  alert("Thanks, " + name + ". This contact form is a demo for the CodexOra template.");
  contactForm.reset();
});

const revealObserver = new IntersectionObserver(function (entries, observer) {
  entries.forEach(function (entry) {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("is-visible");
    observer.unobserve(entry.target);
  });
}, { threshold: 0.14 });

revealItems.forEach(function (item) {
  revealObserver.observe(item);
});

window.addEventListener("resize", function () {
  if (window.innerWidth > 760) {
    closeMenu();
  }
});
