import { WebComponent } from '../../../scripts/generators/webcomponent.js';
import { CellComponent } from './cellcomponent.js'; 

class GridComponent extends WebComponent {
    constructor(size,id = 'grid-component',) {
        super('div');
        this.htmlNode.id = id;
        this.size=size;
        this.htmlNode.style.gridTemplateColumns = `repeat(${size}, 5em)`;
        this.htmlNode.style.gridTemplateRows = `repeat(${size}, 5em)`;
        this.ListenCellClicked();
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

    ListenCellClicked() {
        document.addEventListener('click', function (event) {
            // Récupère l'élément sur lequel l'utilisateur a cliqué
            const clickedElement = event.target;
                
            // Récupère la valeur de l'attribut style
            const style = clickedElement.getAttribute('style');
    
            // Utilise une expression régulière pour extraire les valeurs de grid-area
            const gridAreaMatch = style.match(/grid-area:\s*(\d+)\s*\/\s*(\d+)/);
    
            if (gridAreaMatch) {
                const x = parseInt(gridAreaMatch[2], 10);
                const y = parseInt(gridAreaMatch[1], 10);
    
                // Affiche les valeurs de x et y dans la console
                console.log('x:', x, 'y:', y);
            } else {
                console.log('grid-area non trouvé');
            }
        });
    }

    // Afficher les différents types de murs en fonction des types des cellules
    // In : cell of the grid (player.getGrid().getCell(x,y);)
    displayWalls(cell) {
        this.updateCellStyle(cell => {
            cell.style.backgroundImage = 'url("./ressources/BrokenWall.png")';
            cell.style.backgroundSize = '100% 100%';
        });
    }

}

export { GridComponent }