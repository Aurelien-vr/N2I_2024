// Variable pour stocker le dernier élément cliqué
let lastClickedElement = null;

// Fonction pour configurer les interactions avec les images
function setupImageInteractions() {
    const pickaxeImg = document.getElementById('pickaxe');
    const murImg = document.getElementById('mur');

    if (pickaxeImg) {
        pickaxeImg.addEventListener('click', () => {
            lastClickedElement = pickaxeImg;
            console.log(lastClickedElement);
        });
    }

    if (murImg) {
        murImg.addEventListener('click', () => {
            lastClickedElement = murImg;
            console.log(lastClickedElement);
        });
    }
}

// Appelle la fonction lorsque le DOM est chargé
document.addEventListener('DOMContentLoaded', (event) => {
    setupImageInteractions();
});

export { setupImageInteractions, lastClickedElement }