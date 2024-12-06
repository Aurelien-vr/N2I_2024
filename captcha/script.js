import { GridComponent } from "./modules/webcomponents/gridcomponent";
import { WebComponent } from '../scripts/generators/webcomponent.js';
import { GridForGame } from "./modules/webcomponents/gridforgame.js";
import { Player } from "./modules/logic/player.js";
import { CellState } from "./modules/class/cell.js";
import { createGrid1 } from "./modules/differentgrids/grid1.js";
const size = 9;

// Crée la grille principale
const mainGrid = new GridForGame(size);

for (let x = 1; x <= size; x++) {
    for (let y = 1; y <= size; y++) {
        mainGrid.addElementToGrid(x, y);
    }
}

// Ajoute la grille principale au document
mainGrid.Bind(document.body);


let player = createGrid1();



mainGrid.displayGrid(player);

export{mainGrid,size}