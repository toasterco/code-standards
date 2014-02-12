goog.provide('t.app.ListView');

/*
	@constructor
*/
t.app.ListView = function(el) {
	this.el = el;
};

t.app.ListView.prototype.init = function() {};

t.app.ListView.prototype.clear = function() {
	this.el.innerHTML = '';
};

/*
	Takes an event map, and registers handlers on the list el.
	Event handlers are run in the execution context passed to events().
	@param {object} event map
	@param {object} context
*/
t.app.ListView.prototype.events = function(eventMap, context) {
	var el = this.el;
	goog.object.forEach(evengtMap, function(obj, key) {
		goog.events.listen(el, key, goog.bind(eventMap[key], this));
	}, context);
};

/*
	Clears el and adds a li item for each model in list collection.
	@param {object} list model
*/
t.app.ListView.prototype.render = function(list) {
	this.clear();
	goog.object.forEach(list, function(obj, key) {
		var newNode = document.createElement('li');
		newNode.className = obj.done ? 'complete' : 'incomplete';
		newNode.innerText = obj.item;
		newNode.dataset.id = key;
		this.el.appendChild(newNode);
	}, this);
};
