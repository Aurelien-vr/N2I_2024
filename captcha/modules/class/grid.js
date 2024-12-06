import { Cell } from "./cell.js";

class Grid{
    constructor(gridSize){
        this.gridSize = gridSize;
        this.grid = this.buildGrid();
    }

    buildGrid() {
        let grid = [];
        for (let j = 0; j < this.gridSize; j++) {
            let column = [];
            console.log(j);
            grid.push(column);
            for (let i = 0; i < this.gridSize; i++) {
                grid[j].push(new Cell(i, j));
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
        console.log(this.grid);
        this.grid.forEach(row => row.forEach(cell => console.log(cell.getCellState())));
    }
}

export {Grid}