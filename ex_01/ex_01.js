
document.addEventListener('DOMContentLoaded', () => {
    const square = document.getElementById('square');
    
    if (square) {

        function reduceOpacity() {
            square.style.opacity = 0.5; 
        }

        function resetOpacity() {
            square.style.opacity = 1; 
        }

        square.addEventListener('mouseover', reduceOpacity);
        square.addEventListener('mouseout', resetOpacity);
    } else {
        console.error("L'élément #square n'a pas été trouvé !");
    }
});
