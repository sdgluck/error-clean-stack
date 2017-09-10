'use strict'

function cleanStack (err) {
  return require('clean-stack')(err)
    .replace(/(at.*)\n/, '') // bump first call site
}

class CleanError extends Error {
  constructor (...args) {
    super(...args)
    this.stack  = cleanStack(new Error().stack)
  }
}

class CleanReferenceError extends ReferenceError {
  constructor (...args) {
    super(...args)
    this.stack  = cleanStack(new ReferenceError().stack)
  }
}

class CleanEvalError extends EvalError {
  constructor (...args) {
    super(...args)
    this.stack  = cleanStack(new EvalError().stack)
  }
}

class CleanRangeError extends RangeError {
  constructor (...args) {
    super(...args)
    this.stack  = cleanStack(new RangeError().stack)
  }
}

class CleanSyntaxError extends SyntaxError {
  constructor (...args) {
    super(...args)
    this.stack  = cleanStack(new SyntaxError().stack)
  }
}

class CleanTypeError extends TypeError {
  constructor (...args) {
    super(...args)
    this.stack  = cleanStack(new TypeError().stack)
  }
}

class CleanURIError extends URIError {
  constructor (...args) {
    super(...args)
    this.stack  = cleanStack(new URIError().stack)
  }
}

module.exports.Error = CleanError
module.exports.ReferenceError = CleanReferenceError
module.exports.EvalError = CleanEvalError
module.exports.RangeError = CleanRangeError
module.exports.ReferenceError = CleanReferenceError
module.exports.SyntaxError = CleanSyntaxError
module.exports.TypeError = CleanTypeError
module.exports.URIError = CleanURIError
