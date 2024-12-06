import { Grid } from "../class/grid.js";
import { CellState } from "../class/cell.js";

class Player{
    constructor(posX,posY, grid){
        this.posX = posX;
        this.posY = posY;
        this.grid = grid;
        this.prevPosX = null;
        this.prevPosY = null;
    }
     
    checkForMove(){
        //can't move
        if (this.checkWall(1,0) && this.checkWall(-1,0) && this.checkWall(0,1) && this.checkWall(0,-1)){
            console.log("LOOSE");
        }
    }

    //check if there is a wall at the relative position +x +y of the player
    //check if out of bound at the relative position +x +y of the player

    checkWall(x,y){
        if ((this.grid.getCell(this.posX + x, this.posY + y).getCellState() == CellState.Breakable) ||
        (this.grid.getCell(this.posX + x, this.posY + y).getCellState() == CellState.Unbreakable)){
            return true;
        }
    }  

    outOfGrid(){
        if(this.posX + x <= 0 ||
            this.posY + y <= 0 ||
            this.posX + x >= this.grid.getGridSize() ||
            this.posY + y >= this.grid.getGridSize()){
            return true;
        }
    }

    direction(){
        let diffX = this.posX - this.prevPosX;
        let diffY = this.posY - this.prevPosY;
        if (this.prevPosX == null || this.prevPosY == null){
            return "up";
        }else if(diffX >= 1){
            return "right"
        }else if(diffX <= -1){
            return "left"
        }else if(diffY >= 1){
            return "down"
        }else if(diffY <= -1){
            return "up"
        }else{
            return "no valid"
        }
    }
}


export{Player}