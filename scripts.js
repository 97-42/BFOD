document.addEventListener('DOMContentLoaded', function () {
    const dayCountElement = document.getElementById('day-count');

    fetch('start_date.php')
        .then(response => response.text())
        .then(startDateStr => {
            const startDate = new Date(startDateStr);
            const currentDate = new Date();
            const timeDiff = currentDate - startDate;
            const daysCounted = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
            dayCountElement.textContent = daysCounted; // No +1 to start from 0
        });

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

    // Check for reset parameter in URL with a special command
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('specialResetCommand')) {
        const command = urlParams.get('specialResetCommand');
        fetch(`start_date.php?reset=${command}`)
            .then(() => location.reload());
    }
});
