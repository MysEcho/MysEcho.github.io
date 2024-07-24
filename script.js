document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const body = document.body;

    darkModeToggle.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
        darkModeToggle.textContent = body.classList.contains('dark-mode') ? '☀️' : '🌙';
    });

    // Image carousel
    const carouselImage = document.getElementById('carousel-image');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const imageCaption = document.getElementById('image-caption');

    const images = [
        { src: 'image1.jpg', caption: 'Team Project 2023' },
        { src: 'image2.jpg', caption: 'Research Presentation' },
        { src: 'image3.jpg', caption: 'Robotics Competition' }
    ];

    let currentImageIndex = 0;

    function updateImage() {
        carouselImage.src = images[currentImageIndex].src;
        imageCaption.textContent = images[currentImageIndex].caption;
    }

    prevButton.addEventListener('click', function() {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        updateImage();
    });

    nextButton.addEventListener('click', function() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        updateImage();
    });

    // Initialize the carousel
    updateImage();
});