// http://www.dofactory.com/javascript/iterator-design-pattern

var iterator = (function () {
	var data = [1, 2, 3, 4, 5];
	var index = 0;
	var length = data.length;

	return {
		next: function () {
			var currentElement = data[index]
			
			if (!this.hasNext()) {
				return null;
			};

			index = index + 1;
			return currentElement;
		},
		hasNext: function () {
			return index < length;
		},
		rewind: function () {
			index = 0;
		},
		current: function () {
			return data[index];
		}
	}
})()
