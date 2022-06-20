(function () {
  var svgns = "http://www.w3.org/2000/svg";

  function Line(point1, point2) {
    this.point1 = point1;
    this.point2 = point2;
    this.draw = function () {
      var gLines = document.querySelector("g.lines");

      var line = document.createElementNS(svgns, "line");
      line.setAttributeNS(null, "x1", this.point1.x);
      line.setAttributeNS(null, "y1", this.point1.y);
      line.setAttributeNS(null, "x2", this.point2.x);
      line.setAttributeNS(null, "y2", this.point2.y);

      gLines.appendChild(line);
    };
  }

  Line.getFromIndexes = function (index1, index2, sampleNbr) {
    var point1 = Point.getFromIndex(index1, sampleNbr);
    var point2 = Point.getFromIndex(index2, sampleNbr);

    return new Line(point1, point2);
  };

  window.Line = Line;
})();