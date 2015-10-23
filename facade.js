// This pattern provides  an alternative interfaces for object.

var myevent = {
  stop: function (e) {
    e.preventDefault();
    e.stopPropagation();
  }
}
