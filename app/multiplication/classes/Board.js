import { Line } from './Line.js';
import { Point } from './Point.js';
export class Board {
	constructor() {
		this.config = {
			sampleNbr: 20,
			multiplicationFactor: 3,
		};
	}

	setConfig(configObject) {
		this.config = configObject;
	}

	draw() {
		this.drawPoints();
		this.drawLines();
	}

	drawPoints() {
		for (var i = 0; i < this.config.sampleNbr; i++) {
			Point.getFromIndex(i, this.config.sampleNbr).draw();
		}
	}

	drawLines() {
		for (var i = 0; i < this.config.sampleNbr; i++) {
			Line.getFromIndexes(
				i,
				i * this.config.multiplicationFactor,
				this.config.sampleNbr,
			).draw();
		}
	}
}
