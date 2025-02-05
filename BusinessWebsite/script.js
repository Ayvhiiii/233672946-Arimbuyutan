let currentIndex = 0;
const images = document.querySelectorAll(".carousel-image");

function showSlide(index) {
    images.forEach((img, i) => {
        img.style.display = (i === index) ? "block" : "none";
    });
}

function prevSlide() {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    showSlide(currentIndex);
}

function nextSlide() {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    showSlide(currentIndex);
}

setInterval(nextSlide, 3000); // Auto-slide every 3 seconds
