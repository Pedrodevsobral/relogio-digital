document.addEventListener('DOMContentLoaded', () => {
    const hoursElem = document.getElementById('hours');
    const minutesElem = document.getElementById('minutes');
    const secondsElem = document.getElementById('seconds');
    const fullscreenButton = document.getElementById('fullscreen-button');
    const flipClockContainer = document.querySelector('.flip-clock-container');

    function updateFlipClock() {
        const now = new Date();
        let hours = now.getHours();
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');

        if (hours > 12) {
            hours -= 12;
        } else if (hours === 0) {
            hours = 12;
        }
        hours = String(hours).padStart(2, '0');

        hoursElem.textContent = hours;
        minutesElem.textContent = minutes;
        secondsElem.textContent = seconds;
    }

    fullscreenButton.addEventListener('click', () => {
        if (!document.fullscreenElement) {
            flipClockContainer.requestFullscreen().catch(err => {
                alert(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
            });
        } else {
            document.exitFullscreen();
        }
    });

    setInterval(updateFlipClock, 1000);
    updateFlipClock(); // Inicializa o relógio imediatamente
});
