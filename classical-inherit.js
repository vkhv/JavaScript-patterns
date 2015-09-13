// classical inherit
// In #JavavScript classical inherit mean inherit in classes.

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


// classical inherit #2


function Parent (name) {
	this.name = name || 'vlad';
}
	


function Child () {
	this.surname  = 'khvostov';
	// Call parent constructor like method for this object
	// minus: parent prototype is lost
	Parent.apply(this, arguments)
}

var object = new Child('Alex');

console.log(object) // Child {surname: "khvostov", name: "Alex"}

