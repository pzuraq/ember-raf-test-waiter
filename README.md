# ember-raf-test-waiter

Super simple addon for adding a test waiter to wait on `requestAnimationFrame` in a
relatively generic way. Usage:

```js
// test-helper.js
import { registerWaiter } from 'ember-raf-test-waiter';

registerWaiter();
```

## Installation

* `git clone <repository-url>` this repository
* `cd ember-raf-test-waiter`
* `npm install`

## Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).
