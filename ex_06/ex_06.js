// Méthode qui vérifie si une voiture correspond à la clé/valeur donnée
Object.prototype.isMatching = function(key, value) {
    // Vérification que l'agent a une voiture
    if (this.car && this.car[key] !== undefined) {
        return this.car[key] === value;
    }
    return false;
};

// Fonction qui recherche les voitures correspondant à une clé/valeur
function searchCars(agents, key, value) {
    // Tableau pour stocker les voitures correspondantes
    const matchingCars = [];

    // Parcourir tous les agents
    agents.forEach(agent => {
        if (agent.isMatching(key, value)) {
            // Ajouter la voiture correspondante à la liste des résultats
            matchingCars.push(agent.car);
        }
    });

    // Retourner les voitures correspondantes
    return matchingCars;
}

// Exemple d'utilisation
const agents = [
    {
        firstName: "James",
        lastName: "Bond",
        car: {
            brand: "Aston Martin",
            model: "DB5",
            color: "Silver",
            power: "510hp"
        }
    },
    {
        firstName: "Ethan",
        lastName: "Hunt",
        car: {
            brand: "BMW",
            model: "M3",
            color: "Black",
            power: "450hp"
        }
    },
    {
        firstName: "Jason",
        lastName: "Bourne",
        car: {
            brand: "Ford",
            model: "Mustang",
            color: "Red",
            power: "420hp"
        }
    }
];

// Chercher toutes les voitures avec la marque "Aston Martin"
const result = searchCars(agents, "brand", "Aston Martin");
console.log(result);  // Devrait afficher la voiture d'agent James Bond
