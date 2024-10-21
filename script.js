document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Here you would typically send the form data to a server
        // For this example, we'll just log it to the console
        console.log('Form submitted:');
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Message:', message);

        // Clear the form
        contactForm.reset();

        // Show a success message (you can customize this)
        alert('Thank you for your message! We\'ll get back to you soon.');
    });
});
