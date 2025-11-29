// Smooth scroll for nav links and "View My Work" button
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll('a[href^="#"], [data-scroll]');

  links.forEach((el) => {
    el.addEventListener("click", (e) => {
      const targetSelector =
        el.getAttribute("href")?.startsWith("#")
          ? el.getAttribute("href")
          : el.getAttribute("data-scroll");

      if (!targetSelector || !targetSelector.startsWith("#")) return;

      const target = document.querySelector(targetSelector);
      if (!target) return;

      e.preventDefault();
      const y = target.getBoundingClientRect().top + window.scrollY - 72; // offset for sticky header
      window.scrollTo({ top: y, behavior: "smooth" });
    });
  });
});
