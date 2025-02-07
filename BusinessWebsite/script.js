let currentIndex = 0;
const slides = document.querySelectorAll(".carousel-item");

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove("active");
        if (i === index) {
            slide.classList.add("active");
        }
    });
}

function prevSlide() {
    currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
    showSlide(currentIndex);
}

function nextSlide() {
    currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
    showSlide(currentIndex);
}

// Auto-slide every 3 seconds
setInterval(nextSlide, 15000);

// Show the first slide initially
showSlide(currentIndex);


// Function to load an offline map (Leaflet.js Example)
document.addEventListener("DOMContentLoaded", function() {
    var map = L.map('map').setView([14.5995, 120.9842], 12); // Metro Manila Coordinates

    // Use an offline tile server or pre-downloaded tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    L.marker([14.5995, 120.9842]).addTo(map)
        .bindPopup('HelpingHand Inc.')
        .openPopup();
});
