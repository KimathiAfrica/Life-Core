let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("slide");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 5000); // Change image every 5 seconds
}

function plusSlides(n) {
    showManualSlides(slideIndex += n);
}

function showManualSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}

// Basic form submission handling (you'll need backend integration)
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('appointment-form');
    const formMessage = document.querySelector('.form-message');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        // In a real scenario, you would send this data to a server
        const formData = new FormData(form);
        const data = {};
        formData.forEach((value, key) => data[key] = value);
        console.log(data); // For demonstration

        formMessage.textContent = 'Your appointment request has been submitted. We will contact you shortly.';
        form.reset(); // Clear the form after submission
    });
});