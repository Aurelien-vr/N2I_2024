import { WebComponent } from '../../../scripts/generators/webcomponent.js';

class CellComponent extends WebComponent {
    constructor(row, col) {
        super('div');
        this.htmlNode.style.gridRow = row;
        this.htmlNode.style.gridColumn = col;
        this.AddStyleClass('grid-cell');
        this.AddStyleClass('squareCell');
    }
}

export { CellComponent }