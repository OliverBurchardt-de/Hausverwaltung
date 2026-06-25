// Gemeinsames Front-End-Bundle aller Inhaltsseiten.
// Wird von Vite verarbeitet (minifiziert + Content-Hash) und bindet das
// gemeinsame Stylesheet ein. Enthaelt die mobile Navigation und den
// dezenten Scroll-Reveal-Effekt.
import "./style.css";

(function () {
  // Mobile-Navigation: Aufklapp-Menue unter 880px
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("topnav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Menü schließen" : "Menü öffnen");
    });
    // Beim Klick auf einen Link das Menue wieder schliessen
    nav.addEventListener("click", function (e) {
      if (e.target.closest("a") && nav.classList.contains("open")) {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Menü öffnen");
      }
    });
  }

  // Scroll-Reveal. Ohne IntersectionObserver oder bei reduzierter Bewegung
  // wird der Inhalt sofort sichtbar gemacht (kein Verstecken hinter JS).
  var els = document.querySelectorAll(".rv");
  if (
    !("IntersectionObserver" in window) ||
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    els.forEach(function (e) {
      e.classList.add("in");
    });
    return;
  }
  var io = new IntersectionObserver(
    function (en) {
      en.forEach(function (x) {
        if (x.isIntersecting) {
          x.target.classList.add("in");
          io.unobserve(x.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
  );
  els.forEach(function (e) {
    io.observe(e);
  });
})();
