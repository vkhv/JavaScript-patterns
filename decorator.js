// There is an example of 'decorator' pattern.
// More information  here - http://javascript.info/tutorial/decorators

function Sale (price) {
	this.price = price || 100;
}

Sale.prototype.getPrice = function() {
	return this.price
};

Sale.decorators = {};

Sale.decorators.fedtax = {
	getPrice: function () {
		var price = this.uber.getPrice();
		price += price * 5 / 100;
		return price;
	}
}

Sale.prototype.decorate = function(decorator) {
	var F = function () {},
	overrides = this.constructor.decorators[decorator],
	i,
	newobj;

	F.prototype = this;
	newobj = new F();
	newobj.uber = F.prototype;
	for( i in overrides ) {
		newobj[i] = overrides[i];
	};
	return newobj;
};


var sale = new Sale(50);
sale.decorate('fedtax').getPrice(); // 52.5
