import "modern-normalize/modern-normalize.css";
import "./styles.css";

const carousel = document.querySelector(".carousel");
const images = document.querySelectorAll(".carousel-image");
const imageWidth = parseInt(getComputedStyle(document.querySelector(":root")).getPropertyValue("--image-width"));
const numImages = images.length;
let currentImageIndex = 0;
const rightArrow = document.querySelector(".right");
const leftArrow = document.querySelector(".left");
const dotContainer = document.querySelector('.carousel-dots')

images.forEach((_, index) => {
    const dot = document.createElement('span');
    dot.classList.add('carousel-dot');
    if (index === 0) dot.classList.add('active');

    dot.addEventListener('click', () => {
        showImage(index);
    });

    dotContainer.appendChild(dot);
});

const dots = dotContainer.querySelectorAll('.carousel-dot');

function showImage(index) {
    dots[currentImageIndex].classList.remove('active');
    currentImageIndex = index;
    carousel.style.left = `-${index * imageWidth}px`;
    dots[index].classList.add('active');
}

function moveRight() {
    let newIndex = (currentImageIndex + 1) % numImages;
    showImage(newIndex);
}

function moveLeft() {
    let newIndex = (currentImageIndex - 1 + numImages) % numImages;
    showImage(newIndex);
}

rightArrow.addEventListener('click', moveRight);
leftArrow.addEventListener('click', moveLeft);

