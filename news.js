const sliderFrame = document.querySelector('.slider-frame');
const slideImages = document.querySelector('.slide-images');
const imgContainers = document.querySelectorAll('.img-container');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let currentIndex = 0;
const imgWidth = 1200; // Width of each image
const totalImages = imgContainers.length;

prevButton.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    slideImages.style.transform = `translateX(${-currentIndex * imgWidth}px)`;
  }
});

nextButton.addEventListener('click', () => {
  if (currentIndex < totalImages - 1) {
    currentIndex++;
    slideImages.style.transform = `translateX(${-currentIndex * imgWidth}px)`;
  }
});
