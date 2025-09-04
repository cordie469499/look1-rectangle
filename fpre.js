// スクロール時フェードイン
const faders = document.querySelectorAll('.collection img, .hero-content, .text-block');

const appearOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -60px 0px"
};

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("visible");
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  fader.classList.add("fade-in");
  appearOnScroll.observe(fader);
});