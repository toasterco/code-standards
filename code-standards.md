## Code standards

* Do not complicate readability in exchange for terseness.
* Maintain a consistent style throughout entire code base.
* Document all non-trivial functions.
* Where possible/sane, use goog closure library methods as they are well tested
and designed for cross-browser consistency.

### Documenting and Comments

The following documentation examples follow the standards used by [Google](https://google-styleguide.googlecode.com/svn/trunk/javascriptguide.xml) and [JSDoc](https://code.google.com/p/jsdoc-toolkit/).

```js
/* Example of a doc-block */
/**
 * A JSDoc comment should begin with a slash and 2 asterisks.
 * Inline tags should be enclosed in braces like {@code this}.
 * @desc Block tags should always start on their own line.
 */

 /* Correct indentation & line wrapping */
/**
 * Illustrates line wrapping for long param/return descriptions.
 * @param {string} foo This is a param with a description too long to fit in
 *     one line.
 * @return {number} This returns something that has a description too long to
 *     fit in one line.
 */
/*
	Your code here...
 */

/* Single line comments within code */
var add = function (x, y) {
	return x + y; // sum the two numbers
}
```

### Variable declaration

* Always use `var` when assigning a variable ([don't use single `var` declarations](http://danielhough.co.uk/blog/single-var-pattern-rant)).
* If assigning a global variable,
explicitly declare it as a property of the global object.
* Use a new line for each assignment.
* Unassigned declarations can be done as a comma seperated line.

```js
/* The 'Way' */
var x = 5;
var y = 1;
var foo = 'foo';

/* single-line, unassigned declarations */
var a, b, c;

/* Explicitly declaring  a global property */
window.z = 6;
```

### Spacing

```js
var bar = {
	'hello': world,
	'baz': true
};

/**
 * It's an example function!
 * @param {number} x
 * @param {number} y
 * @return {boolean} True if x is equal to y.
*/
var foo = function(x, y) {
	for (var i = 0; i < 5; i++) {
		console.log(i);
	}
	if (x === y) {
		console.log('x and y are equal.');
	}
	return x === y;
};
```

### Naming

* Do not use one letter variable names or non-standard abbreviations.
* Variable names should be descriptive and self-explanatory.
* Multi word names should use camel case.
* CSS identifiers should be lower case hyphenated.

```js

/**
 * Takes a function and list, returns a new transformed list of items produced
 * as a result of mapping the iterator function through the original list.
 * @param {Function} iterator function
 * @param {array} initial item list
 * @return {array} transformed item list
 */
var map = function(fn, array) {
	// It is acceptable to use a one letter argument name in functions with previously
	// clearly defined parameters known to most developers. However, descriptive
	// argument names are still preferred.

	var results = [];
	goog.array.forEach(array, function(e) {
		results.push(e);
	});

	// results is a descriptive enough name for an array.
	// There is no need to use a verbose name like resultsArray.
	return results;
};
```

### Seperation of concerns

* Make sure each function does one thing only.
* Rather than have long functions to do a job, compose a set of smaller,
well defined functions.
