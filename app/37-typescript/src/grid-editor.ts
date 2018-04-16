import { Grid } from "./grid";

export class GridEditor {

    constructor(public grid: Grid) { }

    render() {


        const editor = document.createElement('div');
        editor.classList.add('editor');
        editor.innerHTML =  `
<button class="pencil">Pencil</button>
<button class="eraser">Eraser</button>
<button class="start">Start</button>
<button class="stop">Stop</button>
`;


        this.grid.element.appendChild(editor);

        this.grid.element.querySelector('.editor .pencil').addEventListener('click', this.selectPencil.bind(this));
        this.grid.element.querySelector('.editor .eraser').addEventListener('click', this.selectEraser.bind(this));
        this.grid.element.querySelector('.editor .start').addEventListener('click', this.start);
        this.grid.element.querySelector('.editor .stop').addEventListener('click', this.stop);
        
    }

    selectPencil() {
        console.log('set pencil');
        this.grid.mode = 'pencil';
    }

    selectEraser() {
        console.log('set eraser');
        this.grid.mode = 'eraser';
    }

    start() {}
    stop() {}

    
}
