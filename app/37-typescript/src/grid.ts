export type Point = [number, number];

export interface Ruler {
    start: {(): void};
}

export class Grid {
    ruler: Ruler = undefined;
    isRunning: boolean = false;
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

        const editor = `<div class="editor">
    <button class="pencil">Pencil</button>
    <button class="eraser">Eraser</button>
    <button class="save">Save</button>
</div>`;

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

    getCellList(): Point[] {
        return new Array(this.row * this.col).fill(0).map((n, i) => <Point>[Math.floor(i / this.col), i % this.col]);
    }

    start() {
        
        if (!this.ruler) {
            console.log('no ruler');
        }
        this.ruler.start();
    }

    
}
