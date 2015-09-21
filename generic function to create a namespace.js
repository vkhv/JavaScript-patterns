// generic function to create a namespace
var MYAPP = MYAPP || {};

MYAPP.namespace = function(ns_string) {
	var parts = ns_string.split();
	var parent = MYAPP;
	var i;

	// delete prefix (name of global object).
	if (parts[0] === 'MYAPP') {
		parts = parts.slice(1);
	};

	for( i = 0; i < parts.length; i += 1 ) {
		// create property if it isn't exist.
		if ( typeof parent[parts[i]] === 'undefined' ) {
			parent[parts[i]] = {};
		};

		parent = parent[parts[i]];
	}

	return parent
}
