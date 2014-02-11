goog.provide('t.app.InputController');

/*
	@constructor
*/
t.app.InputController = function(inputEl, buttonEl) {
	this.input = inputEl;
	this.button = buttonEl;
};

t.app.InputController.prototype.init = function() {};

t.app.InputController.prototype.getValue = function() {
	return this.input.value;
};

t.app.InputController.prototype.clear = function() {
	this.input.value = '';
};

/*
	Registers a function to run on submit and clears the input box.
	TODO: pass a list of functions.
	@param {function} fn
	@param {object} context
*/
t.app.InputController.prototype.onSubmit = function(fn, context) {
	goog.events.listen(this.button, 'click', function() {
		var value = this.getValue();
		if (value) {
			fn.call(context, value);
			this.clear();
		}
	}, false, this);
};
