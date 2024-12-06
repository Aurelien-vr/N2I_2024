import { Grid } from "./modules/class/grid.js";
import { Cell,CellState } from "./modules/class/cell.js";
import { Player } from "./modules/logic/player.js";

const grid = new Grid(3);
grid.getCell(1,0).setCellState(CellState.Unbreakable)
grid.getCell(0,1).setCellState(CellState.Breakable);
grid.getCell(1,2).setCellState(CellState.Breakable);
grid.getCell(2,1).setCellState(CellState.Breakable);
const player = new Player(1,1,grid);
grid.printGrid();
player.checkForMove();


/*
grid.printCellPos(1,2);
grid.printCellState(1,2);
grid.getCell(1,2).setCellState(CellState.Breakable);
grid.printCellState(1,2);
*/
