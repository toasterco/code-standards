// Exports helper to instantiate modules in one line.
goog.provide('t.app.build');

/*
	Runs a module init function and returns it
	in one step.
	@param {object} module
*/
t.app.build = function(module) {
	if (typeof module.init === 'function') {
		module.init();
	}
	return module;
};
