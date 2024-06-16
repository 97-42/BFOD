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
    const daysCounted = Math.floor(timeDiff / (1000 * 60 * 60 * 24)) + 1; // +1 to start from 1
    dayCountElement.textContent = daysCounted;

    // Example image
    const imageUrl = 'resources/image1.jpeg';

    const imagesContainer = document.getElementById('images');
    const img = document.createElement('img');
    img.src = imageUrl;
    img.alt = "Image of Brady's broken Ford";
    img.classList.add('gallery-image'); // Add a class for styling
    imagesContainer.appendChild(img);

    // Check for reset parameter in URL
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('resetTimer')) {
        resetTimer();
    }
});
