// script.js
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    
    if (name === '' || email === '') {
        alert('All fields are required.');
    } else {
        alert('Form submitted successfully!');
    }
});
