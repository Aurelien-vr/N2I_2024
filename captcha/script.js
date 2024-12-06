import { GridForGame } from "./modules/webcomponents/gridforgame.js";
import { createGrid1 } from "./modules/differentgrids/grid1.js";
import { setupImageInteractions } from "./modules/webcomponents/imginteraction.js";

const size = 9;
let player = createGrid1();

// Crée la grille principale
const mainGrid = new GridForGame(size,player);

for (let x = 1; x <= size; x++) {
    for (let y = 1; y <= size; y++) {
        mainGrid.addElementToGrid(x, y);
    }
}

setupImageInteractions();
// Ajoute la grille principale au document
mainGrid.Bind(document.body);

// action listener sur les click
mainGrid.displayGrid(player);

export{mainGrid,size}
