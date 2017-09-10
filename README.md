# error-clean-stack

> errors with [clean stacks](https://github.com/sindresorhus/clean-stack)

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

throw new Error()
```

```sh
$ node examples/error.js
C:\xampp\htdocs\error-clean-stack\examples\error.js:3
throw new Error()
^

Error
  at Object.<anonymous> (C:/xampp/htdocs/error-clean-stack/examples/error.js:3:7)
```

## Contributing

All pull requests and issues welcome!

If you're not sure how, check out the [great video tutorials on egghead.io](http://bit.ly/2aVzthz)!

## License

MIT © [Sam Gluck](https://github.com/sdgluck)
