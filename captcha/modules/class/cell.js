const CellState = Object.freeze({
    Air: 'air',
    Breakable: 'breakable',
    Unbreakable: 'unbreakable',
    PlacedByPlayer: 'placedByPlayer',
    Player: 'player',
    EndFlag:'endFlag'
})

class Cell{
    constructor(posX,posY){
        this.posX = posX;
        this.posY = posY;
        this.cellState = CellState.Air;
    }

    getPosX(){return this.posX}
    getPosY(){return this.posY}
    getCellState(){return this.cellState}

    setCellState(newState){
        if (Object.values(CellState).includes(newState)) {
            this.cellState = newState;
        } else {
            throw new Error(`Invalid cell state: ${newState}. Must be one of ${Object.values(CellState).join(', ')}`);
        }
    }

}

export{Cell, CellState}