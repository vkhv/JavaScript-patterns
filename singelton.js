// The Singleton Pattern limits the number of instances of a particular object to just one. 
// http://www.dofactory.com/javascript/singleton-design-pattern

// The instances in clouser. (preffer)

function Singelton() {
  var instance = this;
  
  Singelton = function() {
    return instance
  };
  
  Singelton.prototype = this;
  
  instance = new Singelton();

  instance.constructor = Singelton;
  
  return instance;
}

var x  = new Singelton();
x.someProp = true;
var y = new Singelton();
y.someProp = false;
x.someProp // false




// The instances in a static prop.

function Singelton() {

  if( typeof Singelton.instance == 'object') {
    return Singelton.instance
  }
  
  Universe.instance = this;
  
}
