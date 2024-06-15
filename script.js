// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Timer
    function updateTimer() {
        const startDate = new Date('June 16, 2022 24:00:00').getTime();
        const now = new Date().getTime();
        const timeDifference = now - startDate;

        const years = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 365));
        const days = Math.floor((timeDifference % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

        document.getElementById('timer').innerHTML = `${years} years, ${days} days, ${hours} hours`;
    }

    setInterval(updateTimer, 1000);
    updateTimer();

    // Timeline Hover Effect
    const nodes = document.querySelectorAll('.node');
    const hoverBox = document.getElementById('hover-box');
    const hoverImage = document.getElementById('hover-image');
    const hoverCaption = document.getElementById('hover-caption');

    nodes.forEach(node => {
        node.addEventListener('mouseover', (event) => {
            const image = node.getAttribute('data-image');
            const caption = node.getAttribute('data-caption');

            hoverImage.src = image;
            hoverCaption.textContent = caption;

            hoverBox.style.display = 'block';
            hoverBox.style.top = `${event.clientY+10}px`;
            hoverBox.style.left = `${event.clientX+10}px`;

            // Check if the hover box is out of the viewport and adjust its position
            const hoverBoxRect = hoverBox.getBoundingClientRect();
            const viewportWidth = window.innerWidth;
            const viewportHeight = window.innerHeight;

            if (hoverBoxRect.right > viewportWidth) {
                hoverBox.style.left = `${event.clientX - hoverBoxRect.width}px`;
            }
            if (hoverBoxRect.bottom > viewportHeight) {
                hoverBox.style.top = `${event.clientY - hoverBoxRect.height}px`;
            }
        });

        node.addEventListener('mouseout', () => {
            hoverBox.style.display = 'none';
        });
    });
});
