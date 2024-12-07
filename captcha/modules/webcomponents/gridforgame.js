import { CellState,Cell } from "../class/cell.js";
import { Direction } from "../logic/player.js";
import {InteractWithGrid} from "./interactwithgrid.js";
import { lastClickedElement } from "./imginteraction.js";
import { GridComponent } from "./gridcomponent.js";

class GridForGame extends GridComponent {
    constructor(size,player, id = 'grid-component') {
        super(size, id);
        this.player = player;
        this.interactWithGrid = new InteractWithGrid(player);
        this.ListenCellClicked();
    }

    ListenCellClicked() {
        document.addEventListener('click', (event) => {
            // Récupère l'élément sur lequel l'utilisateur a cliqué
            const clickedElement = event.target;
                
            // Récupère la valeur de l'attribut style
            const style = clickedElement.getAttribute('style');
    
            // Utilise une expression régulière pour extraire les valeurs de grid-area
            const gridAreaMatch = style.match(/grid-area:\s*(\d+)\s*\/\s*(\d+)/);
    
            if (gridAreaMatch) {
                const x = parseInt(gridAreaMatch[1], 10);
                const y = parseInt(gridAreaMatch[2], 10);
                const cell = this.interactWithGrid.createCell(x, y);

                switch (lastClickedElement) {
                    case document.getElementById('pickaxe'):
                        if(cell.getCellState() === CellState.Breakable){
                            cell.setCellState(CellState.Air);
                        }
                        this.displayCell(this.player, cell);                        
                        break;
                    case document.getElementById('mur'):
                        if(cell.getCellState() === CellState.Air){
                            cell.setCellState(CellState.PlacedByPlayer);
                        }
                        this.displayCell(this.player, cell);                        
                        break;
                    default:
                        /*console.error('Aucun élément cliqué')*/;
                        break;
                }
                
            } else {
                /*console.log('grid-area non trouvé');*/
            }
        });
    }

    displayGrid(player) {
        for (let x = 0; x < player.getGrid().getGridSize(); x++) {
            for (let y = 0; y < player.getGrid().getGridSize(); y++) {
                this.displayCell(player, player.getGrid().getCell(x, y));
                
            }
        }
    }

    // Afficher les différents types de murs en fonction des types des cellules
    // In : player the player who is playing, cell the cell to display
    // cell of the grid (player.getGrid().getCell(x,y);)
    displayCell(player, cellGame) {
        const cell = this.UpdateCellCoordinates(cellGame);
        const x = cell.getPosX();
        const y = cell.getPosY();
        switch (cell.getCellState()) {
            case CellState.Breakable:
                this.placeImage(x, y, './ressources/BrokenWall.png');
                break;
            case CellState.Unbreakable:
                this.placeImage(x, y, './ressources/Wall.png');
                break;
            case CellState.PlacedByPlayer:
                this.placeImage(x, y, './ressources/BuiltWall.png');
                break;
            case CellState.Air:
                this.updateCellStyle(cell.getPosX(),cell.getPosY(), cell => {
                    cell.style.backgroundImage = '';
                });
                break;
            case CellState.Player:
                this.displayPlayer(player, cell);
                break;
            case CellState.EndFlag:
                this.placeImage(x, y, './ressources/EndFlag.png');
            default:
                // console.error('Type de cellule inconnu');
                break;
        }
    }

    placeImage(x, y,src) {
        this.addImageOnCell(x, y, src);
    }

    displayPlayer(player,cell) {
        const x = cell.getPosX();
        const y = cell.getPosY();
        switch(player.direction()){
            case Direction.Up:
                this.placeImage(x, y,'./ressources/CharacterFront.png');
                break;
            case Direction.Left:
                this.placeImage(x, y,'./ressources/CharacterLeft.png');
                break;
            case Direction.Right:
                this.placeImage(x, y,'./ressources/CharacterRight.png');
                break;
            case Direction.Down:
                this.placeImage(x, y,'./ressources/CharacterBack.png');
                break;
            default:
                // console.error('Direction inconnue');
                break;
        }
    }

    // update les coordonnées de la cellule
    // pour qu'elle corresponde au x et y de la grid
    // In : cell the cell to update
    UpdateCellCoordinates(cell){
        const cellule = new Cell(cell.getPosX()+1,cell.getPosY()+1);
        cellule.setCellState(cell.getCellState());
        return cellule
    }
}

export { GridForGame }; 