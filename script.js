// Small helpers
const $ = (sel, el = document) => el.querySelector(sel);

function formatWhatsAppLink(phoneDigits, message) {
  const text = encodeURIComponent(message || "");
  // wa.me expects country code. Brazil = 55
  return `https://wa.me/55${phoneDigits}?text=${text}`;
}

document.addEventListener("DOMContentLoaded", () => {
  // Footer year
  $("#year").textContent = new Date().getFullYear();

  // Mobile nav
  const toggle = $(".nav-toggle");
  const nav = $("#nav");
  toggle?.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });

  // Close mobile nav on link click
  nav?.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle?.setAttribute("aria-expanded", "false");
    });
  });

  // WhatsApp
  const phoneDigits = "21998308072"; // <-- ajuste aqui se mudar
  const message = "Oi, Isabela! Vim pelo seu site e queria informações / agendar uma aula.";
  const whats = $("#whatsLink");
  const phoneText = $("#phoneText");
  if (whats) whats.href = formatWhatsAppLink(phoneDigits, message);
  if (phoneText) phoneText.textContent = "21 99830-8072";

  // GLightbox for click-to-zoom images / video
  // Docs: https://biati-digital.github.io/glightbox/
  const lightbox = GLightbox({
    selector: ".glightbox",
    touchNavigation: true,
    loop: true
  });
});
