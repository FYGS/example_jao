export class Grid {
    element: HTMLElement;

    cells: HTMLElement[][];

    constructor(public row: number, public col: number) { }

    render(element: HTMLElement) {
        console.log('render', element);

        this.element = element;

        let html = '';

        for (let i = 0; i < this.row; i++) {
            let row = '';
            for (let j = 0; j < this.col; j++) {
                row += `<div class="cell"></div>`
            }
            html += `<div class="row">${row}</div>`;
        }

        element.innerHTML = `<div class="table">${html}</div>`;

        this.initCells();
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
    }

    getCell(x, y) {
        return this.cells[x][y];
    }

    set() {

    }

    reset() {

    }
}
