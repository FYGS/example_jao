var svgns = 'http://www.w3.org/2000/svg';

var cx0 = 50;
var cy0 = 50;
var r0 = 45;

class Point extends Drawable {
	constructor(x, y) {
		super();
		this.x = x;
		this.y = y;
	}

	static getFromAngle = function (angle) {
		var cx = cx0 + r0 * Math.cos(angle);
		var cy = cy0 + r0 * Math.sin(angle);

		return new Point(cx, cy);
	};

	static getFromIndex(index, sampleNbr) {
		return Point.getFromAngle(Point.getAngleFromIndex(index, sampleNbr));
	}

	draw() {
		super.draw();
		var gPoints = document.querySelector('g.points');
		var circle = document.createElementNS(svgns, 'circle');
		circle.setAttributeNS(null, 'cx', this.x);
		circle.setAttributeNS(null, 'cy', this.y);
		circle.setAttributeNS(null, 'r', 1);
		gPoints.appendChild(circle);
	}

	static getAngleFromIndex(index, sampleNbr) {
		return (index * Math.PI * 2) / sampleNbr;
	}
}
