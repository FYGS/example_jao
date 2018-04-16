import { Grid } from "./grid";

export class GridEditor {

    constructor(public grid: Grid) { }

    render() {
        const editor = document.createElement('div');
        editor.classList.add('editor');
        editor.innerHTML = `
<button class="toggle">Start</button>
<button class="clear">Clear</button>
<button class="faster">Faster (+)</button>
<button class="slower">Slower (-)</button>
`;
        this.grid.element.appendChild(editor);
        this.grid.element.querySelector('.editor .toggle').addEventListener('click', this.toggle.bind(this));
        this.grid.element.querySelector('.editor .clear').addEventListener('click', this.clear.bind(this));
        this.grid.element.querySelector('.editor .faster').addEventListener('click', this.faster.bind(this));
        this.grid.element.querySelector('.editor .slower').addEventListener('click', this.slower.bind(this));
    }

    toggle() {
        const button = this.grid.element.querySelector('.editor .toggle');
        this.grid.isRunning = !this.grid.isRunning;
        if (this.grid.isRunning) {
            this.grid.start();
            button.innerHTML = 'Stop';
        } else {
            button.innerHTML = 'Start';
        }
    }

    clear() {
        if (this.grid.isRunning) {
            this.toggle();
        }
        this.grid.reset();
    }

    faster() {
        this.grid.time /= 2;
    }

    slower() {
        this.grid.time *= 2;
    }

}
