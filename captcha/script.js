import { Grid } from "./modules/class/grid.js";
import { Cell,CellState } from "./modules/class/cell.js";

const grid = new Grid(3);
grid.printGrid();
grid.printCellPos(1,2);
grid.printCellState(1,2);
grid.getCell(1,2).setCellState(CellState.Breakable);
grid.printCellState(1,2);
