import { GridComponent } from "./modules/webcomponents/gridcomponent";
import { WebComponent } from '../scripts/generators/webcomponent.js';


const size = 9;

// Crée la grille principale
const mainGrid = new GridComponent(size);

for (let i = 1; i <= size; i++) {
    for (let j = 1; j <= size; j++) {
        mainGrid.addElementToGrid(i, j);
    }
}

// Ajoute la grille principale au document
mainGrid.Bind(document.body);

mainGrid.addImageToAllCells('./ressources/walltest.png');

