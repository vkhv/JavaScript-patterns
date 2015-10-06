// Define an interface for creating an object, but let subclasses decide which class to instantiate. 
// Factory Method lets a class defer instantiation to subclasses.
// http://www.dofactory.com/javascript/factory-method-design-pattern


// The class that returns a specific value.
function SomeClass() {
  this.Factory = function(value) {
    if(typeof value === 'string'){
      return new String(value);
    } else if (typeof value === 'number'){
      return Number(value);
    } else {
      return new Object(value);
    }
  };
}

var detector = new SomeClass();

detector.Factory(1) // 1
detector.Factory('string') // String {0: "s", 1: "t", 2: "r", 3: "i", 4: "n", 5: "g"}
detector.Factory({x:1}) // Object {x: 1}
