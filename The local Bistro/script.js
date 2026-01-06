document.addEventListener('DOMContentLoaded', () => {

    // Review Slider
    const reviews = document.querySelectorAll('.review-item');
    const nextButton = document.getElementById('next-review');
    let currentReview = 0;

    function showNextReview() {
        reviews[currentReview].classList.add('hidden');
        currentReview = (currentReview + 1) % reviews.length;
        reviews[currentReview].classList.remove('hidden');
    }

    nextButton.addEventListener('click', showNextReview);

    // Form Validation
    const reservationForm = document.getElementById('reservation-form');
    
    reservationForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value.trim();
        const date = document.getElementById('date').value.trim();
        const time = document.getElementById('time').value.trim();
        const people = document.getElementById('people').value.trim();

        if (name === '' || date === '' || time === '' || people === '') {
            alert('Please fill out all reservation fields before submitting.');
        } else {
            alert(`Reservation confirmed for ${name} on ${date} at ${time} for ${people} people! Thank you.`);
            reservationForm.reset();
        }
    });
});