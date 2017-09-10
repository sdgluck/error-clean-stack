# error-clean-stack

> errors with [clean stacks](https://github.com/sindresorhus/clean-stack)

Made with ❤ at [@outlandish](http://www.twitter.com/outlandish)

<a href="http://badge.fury.io/js/error-clean-stack"><img alt="npm version" src="https://badge.fury.io/js/error-clean-stack.svg"></a>

## Install

```sh
npm install --save error-clean-stack
```

```sh
yarn add error-clean-stack
```

## Import

```js
// ES2015
import cleanErrors from 'error-clean-stack'
```

```js
// CommonJS
var cleanErrors = require('error-clean-stack')
```

## Errors

All errors are exported as named exports. 

```sh
Error
ReferenceError
EvalError
RangeError
ReferenceError
SyntaxError
TypeError
URIError
```

## Example:

### `examples/error.js`

```js
const {Error} = require('error-clean-stack')

function a () {
  function b () {
    throw new Error()
  }
  b()
}

a()
```

```sh
$ node examples/error.js
C:\xampp\htdocs\error-clean-stack\examples\error.js:5
    throw new Error()
    ^

Error
    at b (C:/xampp/htdocs/error-clean-stack/examples/error.js:5:11)
    at a (C:/xampp/htdocs/error-clean-stack/examples/error.js:7:3)
    at Object.<anonymous> (C:/xampp/htdocs/error-clean-stack/examples/error.js:10:1)
```

## Contributing

All pull requests and issues welcome!

If you're not sure how, check out the [great video tutorials on egghead.io](http://bit.ly/2aVzthz)!

## License

MIT © [Sam Gluck](https://github.com/sdgluck)
