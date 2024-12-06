import { Grid } from "../class/grid.js";
import { Cell,CellState } from "../class/cell.js";

const Direction = Object.freeze({
    Up: "up",
    Left: "left",
    Right: "right",
    Down: "down"
})

class Player{
    constructor(posX,posY, gridSize){
        this.posX = posX;
        this.posY = posY;
        this.grid = new Grid(gridSize);
        this.prevPosX = null;
        this.prevPosY = null;
        this.grid.getCell(posX,posY).setCellState(CellState.Player);
    }
     
    checkForMove(){
        let possibleMove = []

        if(this.posX + 1 <= this.grid.getGridSize() && this.grid.getCell(this.posX + 1, this.posY).getCellState() == CellState.Air){
            possibleMove.push([this.posX + 1, this.posY]);
        }
        if(this.posX - 1 >= 0 && this.grid.getCell(this.posX - 1, this.posY).getCellState() == CellState.Air){
            possibleMove.push([this.posX - 1, this.posY]);
        }
        if(this.posY + 1 <= this.grid.getGridSize() && this.grid.getCell(this.posX, this.posY + 1).getCellState() == CellState.Air){
            possibleMove.push([this.posX, this.posY + 1]);
        }
        if(this.posY - 1 >= 0 && this.grid.getCell(this.posX, this.posY - 1).getCellState() == CellState.Air){
            possibleMove.push([this.posX, this.posY - 1]);
        }

        return possibleMove;
    }


    direction(){
        let diffX = this.posX - this.prevPosX;
        let diffY = this.posY - this.prevPosY;
        if (this.prevPosX == null || this.prevPosY == null){
            return Direction.Up;
        }else if(diffX >= 1){
            return Direction.Right;
        }else if(diffX <= -1){
            return Direction.Left;
        }else if(diffY >= 1){
            return Direction.Down;
        }else if(diffY <= -1){
            return Direction.Up;
        }else{
            return "no valid"
        }
    }


    getGrid(){
        return this.grid;
    }
}


export{Player,Direction}