
let currentIndex = 0;

function showSlide(index) {
  const slides = document.querySelectorAll('.slide');
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) {
      slide.classList.add('active');
    }
  });
}

function nextSlide() {
  const slides = document.querySelectorAll('.slide');
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

document.addEventListener('DOMContentLoaded', () => {
  showSlide(currentIndex);
  setInterval(nextSlide, 5000); // Change every 5 seconds
});
