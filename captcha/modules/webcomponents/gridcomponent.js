import { WebComponent } from '../../../scripts/generators/webcomponent.js';
import { CellComponent } from './cellcomponent.js'; 

class GridComponent extends WebComponent {
    constructor(size,id = 'grid-component',) {
        super('div');
        this.htmlNode.id = id;
        this.size=size;
        this.htmlNode.style.gridTemplateColumns = `repeat(${size}, 5em)`;
        this.htmlNode.style.gridTemplateRows = `repeat(${size}, 5em)`;
    }

    // Ajoute un élément à la grille
    addElementToGrid(row, col) {
        const cell = new CellComponent(row, col);
        cell.Bind(this.htmlNode);
    }

    // Accède à une cellule de la grille
    getCell(row, col) {
        return this.htmlNode.querySelector(`.grid-cell[style*="grid-area: ${row} / ${col};"]`);
    }

    //modifie le style d'une cellule
    // In : Int row, Int col, Function styleCallback
    updateCellStyle(row, col, styleCallback) {
        styleCallback(this.getCell(row, col));
    }


    // modifie le style de toutes les cellules
    updateCellStyles(styleCallback) {
        for (let row = 1; row <= this.size; row++) {
            for (let col = 1; col <= this.size; col++) {
                this.updateCellStyle(row, col, styleCallback);
            }
        }
    }

    addImageOnCell(row, col, image) {
        this.updateCellStyle(row, col, cell => {
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