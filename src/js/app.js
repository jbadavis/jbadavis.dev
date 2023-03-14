import gsap from "gsap";

function animate() {
  const pageOverlay = document.querySelectorAll(".jd-page-overlay");
  const headerImage = document.querySelectorAll(".jd-h-image");
  const staggerElms = document.querySelectorAll(".stagger-up");

  const timeline = gsap.timeline();

  timeline
    .to(pageOverlay, { duration: 0.7, opacity: 0, ease: "power2.easeIn" })
    .set(pageOverlay, { "z-index": -1 })
    .to(headerImage, { duration: 0.7, opacity: 1 })
    .staggerFromTo(
      staggerElms,
      2.0,
      { opacity: 0 },
      { opacity: 1, ease: "easeInOut" },
      0.08
    );
}

(function main() {
  animate();
})();
