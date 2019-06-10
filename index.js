const trim = require('ramda/src/trim')

module.exports = {
  trimWhitespace: (str) => {
    return trim(str)
  },
  isNullOrBlank: (str) => {
    return trim(str || '') === ''
  },
  isValidUrl: (str) => {
    try {
      new URL(str)
      return true
    } catch (error) {
      return false
    }
  },
}
