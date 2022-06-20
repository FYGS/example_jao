(function () {
	var sampleNbr = 10;
	var multiplicationFactor = 2;
	var cx0 = 50;
	var cy0 = 50;
	var r0 = 45;

	var gPoints = document.querySelector('g.points');
	var gLines = document.querySelector('g.lines');

	var svgns = 'http://www.w3.org/2000/svg';

	// One point
	function drawPoint(index, sampleNbr, gPoints) {
		var angle = (index * Math.PI * 2) / sampleNbr;
		var cx = cx0 + r0 * Math.cos(angle);
		var cy = cy0 + r0 * Math.sin(angle);
		var circle = document.createElementNS(svgns, 'circle');
		circle.setAttributeNS(null, 'cx', cx);
		circle.setAttributeNS(null, 'cy', cy);
		circle.setAttributeNS(null, 'r', 1);

		gPoints.appendChild(circle);
	}

	// Points
	function drawPoints() {
		for (var index = 0; index < sampleNbr; index++) {
			drawPoint(index, sampleNbr, gPoints);
		}
	}

	// One Line
	function drawLine(pointInteger1, pointInteger2, gLines) {
		var angle1 = (pointInteger1 * Math.PI * 2) / sampleNbr;
		var angle2 = (pointInteger2 * Math.PI * 2) / sampleNbr;
		var x1 = cx0 + r0 * Math.cos(angle1);
		var y1 = cy0 + r0 * Math.sin(angle1);
		var x2 = cx0 + r0 * Math.cos(angle2);
		var y2 = cy0 + r0 * Math.sin(angle2);
		var line = document.createElementNS(svgns, 'line');
		line.setAttributeNS(null, 'x1', x1);
		line.setAttributeNS(null, 'y1', y1);
		line.setAttributeNS(null, 'x2', x2);
		line.setAttributeNS(null, 'y2', y2);

		gLines.appendChild(line);
	}

	// Lines
	function drawLines() {
		for (var index = 0; index < sampleNbr; index++) {
			drawLine(index, index * multiplicationFactor, gLines);
		}
	}

  // Draw
  drawPoints();
  drawLines();
})();
