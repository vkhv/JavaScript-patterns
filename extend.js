//  Function that copies objects and their properties.
// Doesn't work with prototypes.

// shallow copy
function extend(parent, child) {
  var i;
  child = child || {};
  for(i in parent) {
    if(parent.hasOwnProperty(i)) {
      child[i] = parent[i];
    }
  }
  return child;
}

// full copy
function extendDeep(parent, child) {
  var i;
  var toStr = Object.prototype.toString;
  var astr = '[object Array]';
  
  child = child || {};
  
  for(i in parent) {
    if (parent.hasOwnProperty(i)) {
      if (typeof parent[i] === 'object') {
        child[i] = (toStr.call(parent[i]) === astr) ? [] : {};
        extendDeep(parent[i], child[i]);
      } else {
        child[i] = parent[i];
      }
    }
  }
  return child;
}
