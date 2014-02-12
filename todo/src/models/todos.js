// Exports a todo list model.
goog.provide('t.app.TodoModel');
goog.require('goog.ui.IdGenerator');

/*
	Todo collection model constructor.
	@constructor
*/
t.app.TodoModel = function() {
	this.list = {};
	this.uid = new goog.ui.IdGenerator();
	this.onChangeCallbacks = undefined;
};

t.app.TodoModel.prototype.init = function() {};

t.app.TodoModel.prototype.onChange = function(cbs) {
	this.onChangeCallbacks = cbs;
};

t.app.TodoModel.prototype.changed = function() {
	if (this.onChangeCallbacks) {
		goog.array.forEach(this.onChangeCallbacks, function(fn) {
			fn(this.list);
		}, this);
	}
};

/*
	Add an item to map of todos using the nextId.
	Returns the given ID of the model in collection.

	The items object structure should be:
	item: string,
	done: boolean

	@param {object} item
	@return {string} unique ID of model
*/
t.app.TodoModel.prototype.add = function(todo) {
	var id = this.uid.getNextUniqueId();
	this.list[id] = todo;
	this.changed();
	return id;
};

/*
	Remove an item from map of todos by Id.
	@param {number} id
	@return {boolean} True if item removed.
*/
t.app.TodoModel.prototype.remove = function(id) {
	if (this.list[id]) {
		this.list[id] = null;
		delete this.list[id];
		this.changed();
		return true;
	}
};

/*
	Finds specific todo item in map.
	@param {number} id
	@return {object} todo
*/
t.app.TodoModel.prototype.find = function(id) {
	return this.list[id];
};

/*
	Flips the done boolean of an item.
	@param {object} todo
*/
t.app.TodoModel.prototype.toggle = function(id) {
	var todo = this.find(id);
	todo.done = !todo.done;
	this.changed();
};

