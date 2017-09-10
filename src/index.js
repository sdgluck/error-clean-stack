'use strict'

function cleanStack (err) {
  return require('clean-stack')(err)
    .replace(/(at.*)\n/, '') // bump first call site
}

class CleanError extends Error {
  constructor (...args) {
    super(...args)
    this.stack  = cleanStack(new Error(...args).stack)
  }
}

class CleanReferenceError extends ReferenceError {
  constructor (...args) {
    super(...args)
    this.stack  = cleanStack(new ReferenceError(...args).stack)
  }
}

class CleanEvalError extends EvalError {
  constructor (...args) {
    super(...args)
    this.stack  = cleanStack(new EvalError(...args).stack)
  }
}

class CleanRangeError extends RangeError {
  constructor (...args) {
    super(...args)
    this.stack  = cleanStack(new RangeError(...args).stack)
  }
}

class CleanSyntaxError extends SyntaxError {
  constructor (...args) {
    super(...args)
    this.stack  = cleanStack(new SyntaxError(...args).stack)
  }
}

class CleanTypeError extends TypeError {
  constructor (...args) {
    super(...args)
    this.stack  = cleanStack(new TypeError(...args).stack)
  }
}

class CleanURIError extends URIError {
  constructor (...args) {
    super(...args)
    this.stack  = cleanStack(new URIError(...args).stack)
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
