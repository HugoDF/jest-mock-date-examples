# Jest Mock Date examples

> Different approaches to mocking the Date in Jest tests

See the full post and explanation at [codewithhugo.com/mocking-the-current-date-in-jest-tests](https://codewithhugo.com/mocking-the-current-date-in-jest-tests).

There are 2 general approaches to mocking the current date:
- Using `new Date()` and mocking the constructor. 
- Using `new Date(Date.now())` and mocking the output of `Date.now()`.

For each of those approaches in the application code, this repo has examples for a spy-based approach and a full function/constructor stub/mock replacement:
- `Date.now()` + full mock/stub: see [./src/stub-date-now.test.js](./src/stub-date-now.test.js)
- `Date.now()` + spy: see [./src/spy-date-now.test.js](./src/spy-date-now.test.js)
- `new Date()` + full mock/stub: see [./src/stub-date-class.test.js](./src/stub-date-class.test.js)
- `new Date()` + spy: see [./src/spy-new-date.test.js](./src/spy-new-date.test.js)

## Running the tests

Packages were installed with yarn, although npm should work just as well.

- Run `yarn`
- Run `yarn test`
