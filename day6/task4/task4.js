var images = [
    'https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/250591/pexels-photo-250591.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/85773/pexels-photo-85773.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/673857/pexels-photo-673857.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/1187079/pexels-photo-1187079.jpeg?auto=compress&cs=tinysrgb&w=600'
];

var currentIndex = 0;

var slideInterval = 2000; 
var slideTimer;

var slidesContainer = document.querySelector('.slides');

function showSlides() {
    slidesContainer.innerHTML = '';
    images.forEach((image, index) => {
        slidesContainer.innerHTML += `
            <img src="${image}" style="transform: translateX(-${currentIndex * 100}%);">
        `;
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    showSlides();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showSlides();
}

function startSlideShow() {
    slideTimer = setInterval(nextSlide, slideInterval);
}

function stopSlideShow() {
    clearInterval(slideTimer);
}

document.querySelector('.next').addEventListener('click', () => {
    nextSlide();
    stopSlideShow(); 
    startSlideShow(); 
});

document.querySelector('.prev').addEventListener('click', () => {
    prevSlide();
    stopSlideShow(); 
    startSlideShow(); 
});

slidesContainer.addEventListener('mouseenter', stopSlideShow);
slidesContainer.addEventListener('mouseleave', startSlideShow);

showSlides();
startSlideShow();