let currentRotation = 0;

function rotateCircle(step) {
    
    const circle = document.getElementById('circle');

    currentRotation += step;

    circle.style.transform = `rotate(${currentRotation}deg)`;
}

function resetRotation() {
    currentRotation = 0;
    
    
    const circle = document.getElementById('circle');
    circle.style.transform = `rotate(${currentRotation}deg)`;
}

const buttons = document.querySelectorAll('.rotate-button');

buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        const step = parseInt(event.target.value, 10);
        if (step === 0) {
            resetRotation();
        } else {
            rotateCircle(step);
        }
    });
});
