function resetTimer() {
    const startDateKey = 'startDate';
    const newStartDate = new Date();
    localStorage.setItem(startDateKey, newStartDate.toISOString());
    location.reload();
}

// Expose resetTimer function for manual reset via console
window.resetTimer = resetTimer;

document.addEventListener('DOMContentLoaded', function () {
    const dayCountElement = document.getElementById('day-count');
    const startDateKey = 'startDate';
    let storedStartDate = localStorage.getItem(startDateKey);
    let startDate;

    if (storedStartDate) {
        startDate = new Date(storedStartDate);
    } else {
        startDate = new Date();
        localStorage.setItem(startDateKey, startDate.toISOString());
    }

    const currentDate = new Date();
    const timeDiff = currentDate - startDate;
    const daysCounted = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    dayCountElement.textContent = daysCounted + 1; // +1 to start from 1

    // Example images
    const images = [
        'resources/image1.jpeg',
        'https://via.placeholder.com/200',
        'https://via.placeholder.com/200'
    ];

    const imagesContainer = document.getElementById('images');

    images.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        imagesContainer.appendChild(img);
    });

    // Check for reset parameter in URL
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('resetTimer')) {
        resetTimer();
    }
});
