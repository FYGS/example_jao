import { Grid } from "./grid";

export class GridEditor {

    constructor(public grid: Grid) { }

    render() {


        const editor = document.createElement('div');
        editor.classList.add('editor');
        editor.innerHTML =  `
<button class="toggle">Start</button>
`;
        this.grid.element.appendChild(editor);
        this.grid.element.querySelector('.editor .toggle').addEventListener('click', this.toggle.bind(this));
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
   

    
}
