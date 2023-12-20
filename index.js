import trim from 'ramda/src/trim'

const isNullOrBlank = (str) => {
  return trim(str || '') === ''
}

const isValidUrl = (str) => {
  try {
    new URL(str)
    return true
  } catch (error) {
    return false
  }
}

export {
  isNullOrBlank,
  isValidUrl,
}
