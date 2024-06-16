document.addEventListener('DOMContentLoaded', function () {
    const dayCountElement = document.getElementById('day-count');
    const startDate = new Date('2024-01-01'); // Change this date to the start date
    const currentDate = new Date();
    const timeDiff = currentDate - startDate;
    const daysCounted = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    
    dayCountElement.textContent = daysCounted;
    
    // Example images
    const images = [
        'https://via.placeholder.com/200',
        'https://via.placeholder.com/200',
        'https://via.placeholder.com/200'
    ];
    
    const imagesContainer = document.getElementById('images');
    
    images.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        imagesContainer.appendChild(img);
    });
});

function submitEmail() {
    const email = document.getElementById('contact-email').value;
    if (email) {
        alert(`Email submitted: ${email}`);
        // You can add code here to send the email to your server
    } else {
        alert('Please enter a valid email address.');
    }
}
