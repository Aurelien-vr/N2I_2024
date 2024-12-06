class InteractWithGrid{
    constructor(player){
        this.player = player;
    }
    createCell(x,y){
        return this.player.getGrid().getCell(x - 1, y - 1);
    }

}

export{InteractWithGrid}