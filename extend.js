//  Function that copies objects and their properties.
// Doesn't work with prototypes.

function extend(parent, child) {
  var i;
  var child = child || {};
  for(i in parent) {
    if(parent.hasOwnProperty(i)) {
      child[i] = parent[i];
    }
  }
  return child;
}
