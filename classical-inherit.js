// classical inherit
// In #JavavScript classical inherit means inherit in classes.

function Parent () {
	this.wasBornParent = true;
}

function Child () {
	this.isChildClassUsed = true;
}

function inherit (C, P) {
	C.prototype = new P();
}

inherit(Child, Parent);

var object = new Child();

console.log(object.wasBornParent, object.isChildClassUsed); // true true	
// minus: - inherit specific parent's properties.
// - can't use params.


// classical inherit #2


function Parent (name) {
	this.name = name || 'vlad';
}
	


function Child () {
	this.surname  = 'khvostov';
	// Call parent constructor like method for this object
	Parent.apply(this, arguments)
}

var object = new Child('Alex');

console.log(object) // Child {surname: "khvostov", name: "Alex"}

// minuses: the parent prototype is lost
// pluses: child instance gets real copies their properties from parent's constructor.


// classical inherit #3 (unites two examples)

function Parent (name) {
	this.name = name || 'vlad';
}

Parent.prototype.sayHi = function() {
	console.log('Hi ' + this.name)
};


function Child () {
	Parent.apply(this, arguments)
}

Child.prototype = new Parent();

var object = new Child('Alex');

console.log(object.sayHi()); // Hi Alex

// minuses: performance degradation


// classical inherit #4


function inherit(C, P){
	C.prototype = P.prototype
}

// minuses: copies only prototypes.


// classical inherit # (preferred way)


var inherit = (function () {
	var F = function () {};
	return function (C, P) {
		F.prototype = P.prototype;
		C.prototype = new F();
		C.uber = P.prototype;
		C.prototype.constructor = C;
	}
})();


