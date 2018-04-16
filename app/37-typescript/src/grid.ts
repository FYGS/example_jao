export class Grid {
    constructor(public row: number, public col: number) { }

    render(element: HTMLElement) {
        console.log('render', element);

        let html = '';

        for (let i = 0; i < this.row; i++) {
            let row = '';
            for (let j = 0; j < this.col; j++) {
                row += `<div class="cell"></div>`
            }
            html += `<div class="row">${row}</div>`;
        }

        element.innerHTML = `<div class="table">${html}</div>`;
    }
}
