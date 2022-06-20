(function () {
  function Board() {
    this.config = {
      sampleNbr: 20,
      multiplicationFactor: 3,
    };

    this.setConfig = function (configObject) {
      this.config = configObject;
    };

    this.draw = function () {
      this.drawPoints();
      this.drawLines();
    };

    this.drawPoints = function () {
      for (var i = 0; i < this.config.sampleNbr; i++) {
        console.log("i: ", i);
        Point.getFromIndex(i, this.config.sampleNbr).draw();
      }
    };

    this.drawLines = function () {
      for (var i = 0; i < this.config.sampleNbr; i++) {
        Line.getFromIndexes(
          i,
          i * this.config.multiplicationFactor,
          this.config.sampleNbr
        ).draw();
      }
    };
  }

  window.Board = Board;
})();