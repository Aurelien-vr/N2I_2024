import { GridComponent } from "./modules/webcomponents/gridcomponent";
import { WebComponent } from '../scripts/generators/webcomponent.js';

const size = 9;

// Crée la grille principale
const mainGrid = new GridComponent(size);

for (let x = 1; x <= size; x++) {
    for (let y = 1; y <= size; y++) {
        mainGrid.addElementToGrid(x, y);
    }
}

// Ajoute la grille principale au document
mainGrid.Bind(document.body);

mainGrid.addImageToAllCells('./ressources/BrokenWall.png');

