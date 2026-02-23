// Minimal JS: mobile nav toggle + auto year
(() => {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const toggle = document.getElementById("navToggle");
  const links = document.getElementById("navLinks");

  if (toggle && links) {
    toggle.addEventListener("click", () => {
      const isOpen = links.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    // Close menu after clicking a link (mobile)
    links.querySelectorAll("a").forEach(a => {
      a.addEventListener("click", () => {
        links.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });

    // Close menu on Escape
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        links.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }
})();