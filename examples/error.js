const {Error} = require('../')

function a () {
  function b () {
    throw new Error()
  }
  b()
}

a()
