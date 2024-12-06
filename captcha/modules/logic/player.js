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

        if(this.posX + 1 <= this.grid.getGridSize() && this.grid.getCell(this.posX + 1, this.posY).getCellState() == CellState.Air
        && (this.posX + 1 != this.prevPosX && this.posY != this.prevPosY)){
            possibleMove.push([this.posX + 1, this.posY]);
        }
        if(this.posX - 1 >= 0 && this.grid.getCell(this.posX - 1, this.posY).getCellState() == CellState.Air 
        && (this.posX - 1 != this.prevPosX && this.posY != this.prevPosY)){
            possibleMove.push([this.posX - 1, this.posY]);
        }
        if(this.posY + 1 <= this.grid.getGridSize() && this.grid.getCell(this.posX, this.posY + 1).getCellState() == CellState.Air
        && (this.posX != this.prevPosX && this.posY + 1 != this.prevPosY)){
            possibleMove.push([this.posX, this.posY + 1]);
        }
        if(this.posY - 1 >= 0 && this.grid.getCell(this.posX, this.posY - 1).getCellState() == CellState.Air
        && (this.posX != this.prevPosX && this.posY - 1 != this.prevPosY)){
            possibleMove.push([this.posX, this.posY - 1]);
        }

        console.log(possibleMove);
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

    randomMove(){
        const possibleMove = this.checkForMove();
        const move = possibleMove[Math.floor(Math.random()*possibleMove.length)];
        console.log(move);
        return move
    }


    deplacement(){
        for(let i = 0; i < 15; i++){
            const move = this.randomMove();
            this.grid.getCell(this.posX,this.posY).setCellState(CellState.Air);
            this.setPrevPos(this.posX, this.posY);
            this.setPosition(move[0],move[1]);
            this.grid.getCell(this.posX,this.posY).setCellState(CellState.Player);
            this.grid.printGrid();
        }
    }

    getGrid(){
        return this.grid;
    }

    setPosition(x,y){
        this.posX = x;
        this.posY = y;
    }

    setPrevPos(x,y){
        this.prevPosX = x;
        this.prevPosY = y;
    }
}


export{Player,Direction}