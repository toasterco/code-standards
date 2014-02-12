goog.require('t.app.TodoModel');
goog.require('t.app.InputController');

describe("Application", function() {

  describe("Todo Collection", function() {
  	var todoModels;

  	beforeEach(function() {
  		todoModels = new t.app.TodoModel();
		})

  	it('should have a list property which is an object', function() {
  		todoModels.should.have.property('list');
  		todoModels.list.should.be.type('object');
  	});

  	it('add() should add an item into Collection and return its ID', function() {
			var payload = {item: 'hello', done: false};
			var id = todoModels.add(payload);
			todoModels.find(id).should.eql(payload);
  	});

  	it('toggle() should toggle an items done boolean', function() {
			var id = todoModels.add({item: 'hello', done: false});
			var model = todoModels.find(id);
			model.done.should.equal(false);
			todoModels.toggle(id);
			model.done.should.equal(true);
  	});

  	it('remove() should remove an item from list', function() {
  		var payload = {item: 'hello', done: false};
			var id = todoModels.add(payload);
			todoModels.find(id).should.eql(payload);
			todoModels.remove(id);
			(todoModels.find(id) === undefined).should.equal(true);
  	});

  	it('changed() should run onChanged fns', function(done) {
  		var done = false;
  		var fn = function() {
  			done = true;
  		};

  		todoModels.onChange([fn]);
  		todoModels.changed();
  		done.should.equal(true);
  	});

  });

	describe('Input Controller', function() {
		var inputController, input;

		beforeEach(function() {
			input = document.querySelector('.input');
			var button = document.querySelector('.input-button');
			inputController = new t.app.InputController(input, button);
		});

		it('should have input and button el properties', function() {
			inputController.should.have.property('input');
			inputController.should.have.property('button');
		});

		it('getValue() should return current input value', function() {
			(inputController.getValue()).should.equal('');
			input.value = 'l';
			(inputController.getValue()).should.equal('l');
		});

		it('clear() should clear the input', function() {
			input.value = 'l';
			(inputController.getValue()).should.equal('l');
			inputController.clear();
			(inputController.getValue()).should.equal('');
		});
	});

});
