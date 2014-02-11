## Code quality and testability guidelines

A set of JavaScript code standards for programmers at Toaster Ltd.

### Objectives

Due to the nature of the work we do, we aim to achieve these qualities in all the code written at Toaster Ltd.

* Maintainability
* Readability
* Testability

### Maintainability

When handing over code to clients, we want to be kind to future maintainers (which in a lot of the cases, will be you. So be kind to your future self as well!). It should be simple to modify existing features, and designed in a way that reduces the friction of adding new features.

* Assume the spec will change.
* Agree important design choices across all developers working on the project.
* Follow a modular and event-oriented approach to application design.
* Keep modules and interfaces as small as possible. Follow the rule of seperation.
* Provide an overall project documentation, including how to build, deploy, and an overview of the important code modules and how they interact with each other.
* Try to provide special documentation for any hacks. (Add a comment to any particularly hacky code explaining how it works and why it is there.)

### Readability

When writing code we should try to optimise for readability. It should be easy for any other experienced JavaScript programmer to usefully modify your code.

* Document all non-trivial code in accordance with JSDoc/Closure standards.
* Follow Toaster Ltd/Closure code style guidelines.

### Testability

When refactoring code and adding new features, we want to have as much automated testing as possible to catch any regressions. Writing for testability also improves code quality, as your functions must produce an expectable and predictable result across many cases.

* Write functions that have a predictible behaviour.
* Write unit tests.
