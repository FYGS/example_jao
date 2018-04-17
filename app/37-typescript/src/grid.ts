import { GridEditor } from "./grid-editor";

export interface Ruler {
    start: {(): void};
    grid: Grid;
    save: {(): void};
}

export class Grid {
    time: number = 100;
    ruler: Ruler = undefined;
    isRunning: boolean = false;
    element: HTMLElement;
    gridEditor: GridEditor = undefined;

    cells: HTMLElement[][];

    constructor(public row: number, public col: number, public cellSize: number = 30) { 
        this.gridEditor = new GridEditor(this);
    }

    render(element: HTMLElement) {
        console.log('render', element);

        this.element = element;

        let html = '';

        for (let i = 0; i < this.row; i++) {
            let row = '';
            for (let j = 0; j < this.col; j++) {
                row += `<div style="width: ${this.cellSize}px; height: ${this.cellSize}px;" class="cell"></div>`
            }
            html += `<div class="row">${row}</div>`;
        }

        const editor = `<div class="editor">
    <button class="pencil">Pencil</button>
    <button class="eraser">Eraser</button>
    <button class="save">Save</button>
</div>`;

        element.innerHTML = `<div class="table">${html}</div>`;

        this.initCells();
        this.gridEditor.render();
    }

    initCells() {
        this.cells = [];
        Array.from(this.element.querySelectorAll('.row')).forEach(r => {
            const row = [];
            Array.from(r.querySelectorAll('.cell')).forEach(c => {
                row.push(c);
            });
            this.cells.push(row);
        });
        this.cells.forEach(row => row.forEach(c => c.addEventListener('click', () => {
            if (c.classList.contains('active')) {
                c.classList.remove('active');
            } else {
                c.classList.add('active');
            }
        })));
    }

    getCell(x, y) {
        try {
            return this.cells[x][y];
        } catch (e) {
            return undefined;
        }
    }

    set(x, y) {
        const cell = this.getCell(x, y);
        if (cell === undefined) {
            return;
        }
        cell.classList.add('active');
    }

    reset() {
        this.cells.forEach(r => r.forEach(c => c.classList.remove('active')));
    }

    start() {
        if (!this.ruler) {
            console.log('no ruler');
        }
        this.ruler.save();
        this.ruler.start();
    }

    setRuler(ruler: Ruler) {
        this.ruler = ruler;
        ruler.grid = this;
    }
}
