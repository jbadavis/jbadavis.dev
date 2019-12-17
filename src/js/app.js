import { TimelineLite } from "gsap";

function animate() {
  const pageOverlay = document.querySelectorAll(".jd-page-overlay");
  const headerImage = document.querySelectorAll(".jd-h-image");
  const staggerElms = document.querySelectorAll(".stagger-up");

  new TimelineLite()
    .to(pageOverlay, 0.7, { opacity: 0, ease: "power2.easeIn" })
    .set(pageOverlay, { "z-index": -1 })
    .to(headerImage, 0.7, { opacity: 1 })
    .staggerFromTo(
      staggerElms,
      1,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, ease: "easeInOut" },
      0.1
    );
}

(function main() {
  animate();
})();
