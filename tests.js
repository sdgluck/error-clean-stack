const errors = require('./')

describe('error-clean-stack', () => {
  Object.keys(errors).forEach((error) => {
    it('throws clean ' + error, () => {
      expect(() => {
        throw new errors[error](error)
      }).toThrowError(error)
    })
  })
})
