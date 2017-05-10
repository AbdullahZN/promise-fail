# promise-fail
Promise.all for failures
Check if all promises fail

```bash
> npm install promise-fail || yarn add promise-fail
```

Require module

```js
Promise.fail = require('promise-fail'); // why not
// or
const checkPromisesFailure = require('promise-fail');
```

### Usage

This module checks if all Promises given in arguments fail and returns the first non-failing Promise

```js
const p1 = Promise.reject(true);
const p2 = Promise.reject(true);
const p3 = Promise.reject(true);
const p4 = Promise.resolve("YES");

// this will print 'All promises have failed'
Promise.fail([ p1, p2, p3 ])
  .then(() => console.log("All promises have failed"))
  .catch(promise => console.log(promise));

// this will print 'Promise { 'YES' }' or alike
Promise.fail([ p1, p4 ])
  .then(() => console.log("All promises have failed"))
  .catch(promise => console.log(promise));
```
