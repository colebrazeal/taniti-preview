// carousel.js - simple show/hide image switcher (no animations)
document.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.carousel-images');
  if (!track) return;

  const images = Array.from(track.querySelectorAll('img'));
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');

  if (images.length === 0) return;

  let currentIndex = 0;

  // initialize: mark first image active
  function showIndex(i) {
    images.forEach((img, idx) => {
      img.classList.toggle('active', idx === i);
    });
    currentIndex = i;
  }

  showIndex(0);

  // next / prev handlers
  if (nextButton) {
    nextButton.addEventListener('click', () => {
      const nextIndex = (currentIndex + 1) % images.length;
      showIndex(nextIndex);
    });
  }

  if (prevButton) {
    prevButton.addEventListener('click', () => {
      const prevIndex = (currentIndex - 1 + images.length) % images.length;
      showIndex(prevIndex);
    });
  }

  // optional: keyboard support (left/right)
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
      const nextIndex = (currentIndex + 1) % images.length;
      showIndex(nextIndex);
    } else if (e.key === 'ArrowLeft') {
      const prevIndex = (currentIndex - 1 + images.length) % images.length;
      showIndex(prevIndex);
    }
  });

  // optional: auto-advance every 5s (comment out if not wanted)
  // const auto = setInterval(() => {
  //   const nextIndex = (currentIndex + 1) % images.length;
  //   showIndex(nextIndex);
  // }, 5000);
});
