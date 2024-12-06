import { Cell } from "./cell.js";

class Grid{
    constructor(gridSize){
        this.gridSize = gridSize;
        this.grid = this.buildGrid();
    }

    buildGrid() {
        let grid = [];
        for(let i=0; i < this.gridSize; i++){
            let row = [];
            grid.push(row);
            for(let j = 0; j < this.gridSize; j++){
                grid[i].push(new Cell(i,j));
            }
        }
        return grid;
    }

    printCellPos(x,y){
        console.log(`X = ${this.grid[x][y].posX}, Y =  ${this.grid[x][y].posY}`);
    }

    printCellState(x,y){
        console.log(`State = ${this.grid[x][y].cellState}`);
    }

    
    //in = 2 int
    //out = cell
    getCell(x,y){
        return this.grid[x][y];
    }

    getGridSize(){return this.gridSize}

    printGrid(){
        for (let row of this.grid) {
            let rowString = row.map(cell => cell.cellState).join(" | ");
            console.log(rowString);
        }
    }
}

export {Grid}