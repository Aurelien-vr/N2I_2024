import { CellState } from "../class/cell.js";
import { Player } from "../logic/player.js";
function createGrid1(){
    const size = 9;
    let player = new Player(8,4,size);
    // COL 1
    player.getGrid().getCell(0,0).setCellState(CellState.Unbreakable);
    player.getGrid().getCell(0,1).setCellState(CellState.Unbreakable);
    player.getGrid().getCell(0,2).setCellState(CellState.EndFlag);
    player.getGrid().getCell(0,3).setCellState(CellState.Breakable);
    player.getGrid().getCell(0,4).setCellState(CellState.Unbreakable);
    player.getGrid().getCell(0,5).setCellState(CellState.Unbreakable);
    player.getGrid().getCell(0,6).setCellState(CellState.Unbreakable);
    player.getGrid().getCell(0,7).setCellState(CellState.Unbreakable);
    player.getGrid().getCell(0,8).setCellState(CellState.Unbreakable);
    // COL 2
    player.getGrid().getCell(1,0).setCellState(CellState.Unbreakable);
    player.getGrid().getCell(1,1).setCellState(CellState.Air);
    player.getGrid().getCell(1,2).setCellState(CellState.Breakable);
    player.getGrid().getCell(1,3).setCellState(CellState.Unbreakable);
    player.getGrid().getCell(1,4).setCellState(CellState.Breakable);
    player.getGrid().getCell(1,5).setCellState(CellState.Unbreakable);
    player.getGrid().getCell(1,6).setCellState(CellState.Breakable);
    player.getGrid().getCell(1,7).setCellState(CellState.Unbreakable);
    player.getGrid().getCell(1,8).setCellState(CellState.Unbreakable);
    // COL 3
    player.getGrid().getCell(2,0).setCellState(CellState.Unbreakable);
    player.getGrid().getCell(2,1).setCellState(CellState.Air);
    player.getGrid().getCell(2,2).setCellState(CellState.Unbreakable);
    player.getGrid().getCell(2,3).setCellState(CellState.Breakable);
    player.getGrid().getCell(2,4).setCellState(CellState.Unbreakable);
    player.getGrid().getCell(2,5).setCellState(CellState.Breakable);
    player.getGrid().getCell(2,6).setCellState(CellState.Breakable);
    player.getGrid().getCell(2,7).setCellState(CellState.Unbreakable);
    player.getGrid().getCell(2,8).setCellState(CellState.Unbreakable);
    // COL 4
    player.getGrid().getCell(3,0).setCellState(CellState.Unbreakable);
    player.getGrid().getCell(3,1).setCellState(CellState.Breakable);
    player.getGrid().getCell(3,2).setCellState(CellState.Air);
    player.getGrid().getCell(3,3).setCellState(CellState.Breakable);
    player.getGrid().getCell(3,4).setCellState(CellState.Unbreakable);
    player.getGrid().getCell(3,5).setCellState(CellState.Breakable);
    player.getGrid().getCell(3,6).setCellState(CellState.Unbreakable);
    player.getGrid().getCell(3,7).setCellState(CellState.Breakable);
    player.getGrid().getCell(3,8).setCellState(CellState.Unbreakable);
    // COL 5
    player.getGrid().getCell(4,0).setCellState(CellState.Unbreakable);
    player.getGrid().getCell(4,1).setCellState(CellState.Breakable);
    player.getGrid().getCell(4,2).setCellState(CellState.Air);
    player.getGrid().getCell(4,3).setCellState(CellState.Breakable);
    player.getGrid().getCell(4,4).setCellState(CellState.Unbreakable);
    player.getGrid().getCell(4,5).setCellState(CellState.Unbreakable);
    player.getGrid().getCell(4,6).setCellState(CellState.Breakable);
    player.getGrid().getCell(4,7).setCellState(CellState.Unbreakable);
    player.getGrid().getCell(4,8).setCellState(CellState.Unbreakable);
    // COL 6
    player.getGrid().getCell(5,0).setCellState(CellState.Unbreakable);
    player.getGrid().getCell(5,1).setCellState(CellState.Unbreakable);
    player.getGrid().getCell(5,2).setCellState(CellState.Air);
    player.getGrid().getCell(5,3).setCellState(CellState.Breakable);
    player.getGrid().getCell(5,4).setCellState(CellState.Breakable);
    player.getGrid().getCell(5,5).setCellState(CellState.Unbreakable);
    player.getGrid().getCell(5,6).setCellState(CellState.Air);
    player.getGrid().getCell(5,7).setCellState(CellState.Air);
    player.getGrid().getCell(5,8).setCellState(CellState.Unbreakable);
    // COL 7
    player.getGrid().getCell(6,0).setCellState(CellState.Unbreakable);
    player.getGrid().getCell(6,1).setCellState(CellState.Unbreakable);
    player.getGrid().getCell(6,2).setCellState(CellState.Air);
    player.getGrid().getCell(6,3).setCellState(CellState.Air);
    player.getGrid().getCell(6,4).setCellState(CellState.Unbreakable);
    player.getGrid().getCell(6,5).setCellState(CellState.Breakable);
    player.getGrid().getCell(6,6).setCellState(CellState.Unbreakable);
    player.getGrid().getCell(6,7).setCellState(CellState.Air);
    player.getGrid().getCell(6,8).setCellState(CellState.Unbreakable);
    // COL 8
    player.getGrid().getCell(7,0).setCellState(CellState.Unbreakable);
    player.getGrid().getCell(7,1).setCellState(CellState.Unbreakable);
    player.getGrid().getCell(7,2).setCellState(CellState.Breakable);
    player.getGrid().getCell(7,3).setCellState(CellState.Air);
    player.getGrid().getCell(7,4).setCellState(CellState.Air);
    player.getGrid().getCell(7,5).setCellState(CellState.Air);
    player.getGrid().getCell(7,6).setCellState(CellState.Air);
    player.getGrid().getCell(7,7).setCellState(CellState.Air);
    player.getGrid().getCell(7,8).setCellState(CellState.Unbreakable);
    // COL 9
    player.getGrid().getCell(8,0).setCellState(CellState.Unbreakable);
    player.getGrid().getCell(8,1).setCellState(CellState.Unbreakable);
    player.getGrid().getCell(8,2).setCellState(CellState.Unbreakable);
    player.getGrid().getCell(8,3).setCellState(CellState.Unbreakable);
    player.getGrid().getCell(8,5).setCellState(CellState.Unbreakable);
    player.getGrid().getCell(8,6).setCellState(CellState.Unbreakable);
    player.getGrid().getCell(8,7).setCellState(CellState.Unbreakable);
    player.getGrid().getCell(8,8).setCellState(CellState.Unbreakable);

    return player;
}

export { createGrid1 }