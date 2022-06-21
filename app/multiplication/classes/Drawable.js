(function () {
  "use strict";

  function Drawable() {}

  Drawable.prototype.draw = function () {
    console.log("I draw myself.");
  };

  window.Drawable = Drawable;
})();