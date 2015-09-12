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

