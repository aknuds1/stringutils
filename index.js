const S = require('underscore.string.fp')

module.exports = {
  trimWhitespace: (str) => {
    return S.trim(null, str)
  },
  isNullOrBlank: (str) => {
    return str == null || S.isBlank(str)
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
