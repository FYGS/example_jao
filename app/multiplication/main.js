import { Board } from './classes/Board.js';

var board = new Board();
board.setConfig({
	sampleNbr: 100,
	multiplicationFactor: 2,
});
board.draw();
console.log('this', this); // undefined
console.log('globalThis', globalThis);
// use npx serve to launch !
