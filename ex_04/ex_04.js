// Fonction pour augmenter la quantité
function increaseQuantity(button) {
    const product = button.closest('.product');
    const quantityElement = product.querySelector('.quantity');
    let quantity = parseInt(quantityElement.textContent, 10);
    quantity++;
    quantityElement.textContent = quantity;
}

// Fonction pour diminuer la quantité
function decreaseQuantity(button) {
    const product = button.closest('.product');
    const quantityElement = product.querySelector('.quantity');
    let quantity = parseInt(quantityElement.textContent, 10);
    if (quantity > 0) {
        quantity--;
        quantityElement.textContent = quantity;
    }
}

// Fonction pour supprimer un produit
function deleteProduct(button) {
    const product = button.closest('.product');
    product.remove(); // Supprime le produit du DOM
}

// Fonction pour animer le cœur
function toggleHeart(button) {
    button.classList.toggle('is-active');
}

// Sélectionner tous les boutons et ajouter des événements
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.increase').forEach(button => {
        button.addEventListener('click', () => increaseQuantity(button));
    });

    document.querySelectorAll('.decrease').forEach(button => {
        button.addEventListener('click', () => decreaseQuantity(button));
    });

    document.querySelectorAll('.delete').forEach(button => {
        button.addEventListener('click', () => deleteProduct(button));
    });

    document.querySelectorAll('.heart').forEach(button => {
        button.addEventListener('click', () => toggleHeart(button));
    });
});
