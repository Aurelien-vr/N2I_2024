import { WebComponent } from '../../../scripts/generators/webcomponent.js';
import { CellComponent } from './cellcomponent.js'; 
//import { CellState } from '../../../scripts/enums/cellstate.js';

class GridComponent extends WebComponent {
    constructor(size,id = 'grid-component',) {
        super('div');
        this.htmlNode.id = id;
        this.size=size;
        this.htmlNode.style.gridTemplateColumns = `repeat(${size}, 5em)`;
        this.htmlNode.style.gridTemplateRows = `repeat(${size}, 5em)`;
        this.htmlNode.style.backgroundImage = 'url("./ressources/Background.png")';
    }

    // Ajoute un élément à la grille
    addElementToGrid(x, y) {
        const cell = new CellComponent(x, y);
        cell.Bind(this.htmlNode);
    }

    // Accède à une cellule de la grille
    getCell(x, y) {
        return this.htmlNode.querySelector(`.grid-cell[style*="grid-area: ${x} / ${y};"]`);
    }

    //modifie le style d'une cellule
    // In : Int x, Int y, Function styleCallback
    updateCellStyle(x, y, styleCallback) {
        const cell = this.getCell(x, y);
        if (cell) {
            styleCallback(cell);
        }else{
            console.error('Cellule non trouvée');
        }
    }

    // modifie le style de toutes les cellules
    updateCellStyles(styleCallback) {
        for (let x = 1; x <= this.size; x++) {
            for (let y = 1; y <= this.size; y++) {
                this.updateCellStyle(x, y, styleCallback);
            }
        }
    }

    addImageOnCell(x, y, image) {
        this.updateCellStyle(x, y, cell => {
            cell.style.backgroundImage = `url("${image}")`;
            cell.style.backgroundSize = '100% 100%';
        });
    }

    // Ajoute une image à toutes les cellules
    addImageToAllCells(image) {
        this.updateCellStyles(cell => {
            cell.style.backgroundImage = `url("${image}")`;
            cell.style.backgroundSize = '100% 100%';
        });
    }

    
}

export { GridComponent }