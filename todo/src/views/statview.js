goog.provide('t.app.StatView');

/*
	@constructor
*/
t.app.StatView = function(el) {
	this.el = el;
};

t.app.StatView.prototype.init = function() {};

t.app.StatView.prototype.clear = function() {
	this.el.innerHTML = '';
};

/*
	Clears el and appends a span showing amount of items and amount done
	in list model that is passed.
	@param {object} list model
*/
t.app.StatView.prototype.render = function(list) {
	this.clear();
	var newNode = document.createElement('span');
	newNode.innerHTML += 'Amount: '
	newNode.innerHTML += '' + goog.object.getCount(list);
	newNode.innerHTML += ' Done: '
	newNode.innerHTML += '' + goog.object.getCount(goog.object.filter(list, function(e) {
		return e.done;
	}));
	this.el.appendChild(newNode);
};
