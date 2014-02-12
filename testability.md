## Testing guidelines

### Intro

Testing gives confidence to developers when coming on to a project or refactoring, the act of writing for testability also improves code quality as
you are forced to write more modular programs with predictible behaivour.

Test cases also double up as a decent source of documentation for programmers
working on a project. One can look at test cases for each module to see how
each piece of functionality is intended to be used.

### Getting started

I recommend using jasmine or mocha as a test framework, and should.js as an
assertion library.

#### Standard syntax for testing

You can read more about the syntax of [jasmine](http://pivotal.github.io/jasmine/), [mocha](http://visionmedia.github.io/mocha/), and [should.js](https://github.com/visionmedia/should.js/).

Generally you will have describe blocks which group together unit tests of a
certain type, with each unit test starting off with an it() call. The it() fn
takes a string parameter describing the test, and a function that contains the
test code.

As long as all the assertions within the unit test are ok, the test will pass.

```js
	describe('Test example', function() {
		it('1 + 1 should equal 2', function() {
			(1+1).should.equal(2);
		});
	});
```

### Testing

Make sure to test any code that handles modification of data models. Each module
should have its own seperate describe block, and a unit test for each non-trivial
function.

Each unit test should set a pre-existing condition for the test, and then run
the function asserting the expected result for that case.
