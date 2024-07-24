document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form submission (you'll need to set up a backend to handle this)
    document.getElementById('contact-form').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Form submitted! (Note: This is a demo, no data is actually sent)');
        this.reset();
    });
});