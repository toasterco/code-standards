goog.provide('t.App');
goog.require('goog.array');
goog.require('goog.object');
goog.require('goog.events');
goog.require('goog.ui.IdGenerator');
goog.require('t.app.TodoModel');
goog.require('t.app.ListView');
goog.require('t.app.StatView');
goog.require('t.app.InputController');
goog.require('t.app.build');

/*
	Main application constructor.
	@constructor
	@param {DOMElement} listEl
	@param {DOMElement} statEl
*/
t.App = function(listEl, statEl, inputEl, inputButton) {
	this.todoModel = t.app.build(new t.app.TodoModel());
	this.listView = t.app.build(new t.app.ListView(listEl));
	this.statView = t.app.build(new t.app.StatView(statEl));
	this.inputController = t.app.build(new t.app.InputController(inputEl, inputButton));
};

t.App.prototype.init = function() {

	// Set views to rerender on model change.
	this.todoModel.onChange([
		goog.bind(this.listView.render, this.listView),
		goog.bind(this.statView.render, this.statView)
	]);

	// Toggle relevant item on todoModel when clicked on listView.
	this.listView.events({
		'click': function(e) {
			if (e.target.dataset.id) {
				this.todoModel.toggle(e.target.dataset.id);
			}
		}
	}, this);

	// On submit, add a new item to the todoModel collection.
	this.inputController.onSubmit(function(value) {
		if (value) {
			this.todoModel.add({
				item: value,
				done: false
			});
		}
	}, this);

};
