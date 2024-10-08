function findClosestResult(functionsObj, inputNumber, outputNumber) {
    let closestKey = null;  // Variable pour stocker la clé la plus proche
    let closestDifference = Infinity;  // Initialiser avec une différence infinie
    
    // Parcourir chaque fonction dans l'objet
    for (let key in functionsObj) {
        if (functionsObj.hasOwnProperty(key)) {
            // Appeler la fonction avec inputNumber
            const result = functionsObj[key](inputNumber);
            
            // Calculer la différence avec outputNumber
            const difference = Math.abs(result - outputNumber);
            
            // Si la différence est plus petite que la plus proche trouvée jusqu'à présent
            if (difference < closestDifference) {
                closestDifference = difference;
                closestKey = key;
            }
        }
    }
    
    // Retourner la clé de la fonction qui donne le résultat le plus proche
    return closestKey;
}

// Exemple d'utilisation
const fObj = {
    multipleByEight: (x) => x * 8,
    square: (x) => x * x,
    addSixty: (x) => x + 60
};

// Tester la fonction avec différents exemples
console.log(findClosestResult(fObj, 5, 26)); // Devrait afficher 'square'
console.log(findClosestResult(fObj, 10, 5)); // Devrait afficher 'addSixty'
console.log(findClosestResult(fObj, 5, 45)); // Devrait afficher 'multipleByEight'
