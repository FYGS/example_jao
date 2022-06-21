var svgns = 'http://www.w3.org/2000/svg';

class Line extends Drawable {
	constructor(point1, point2) {
		super();
		this.point1 = point1;
		this.point2 = point2;
	}

	static getFromIndexes(index1, index2, sampleNbr) {
		var point1 = Point.getFromIndex(index1, sampleNbr);
		var point2 = Point.getFromIndex(index2, sampleNbr);

		return new Line(point1, point2);
	}

	draw() {
		console.log('this: ', this);
		super.draw();
		console.log('this: ', this);

		var gLines = document.querySelector('g.lines');

		var line = document.createElementNS(svgns, 'line');
		line.setAttributeNS(null, 'x1', this.point1.x);
		line.setAttributeNS(null, 'y1', this.point1.y);
		line.setAttributeNS(null, 'x2', this.point2.x);
		line.setAttributeNS(null, 'y2', this.point2.y);

		gLines.appendChild(line);
	}
}
