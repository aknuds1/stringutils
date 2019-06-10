const test = require('ava')

const {isNullOrBlank,} = require('./')

test('isNullOrBlank returns true for null', (t) => {
  t.true(isNullOrBlank(null))
})

test('isNullOrBlank returns true for undefined', (t) => {
  t.true(isNullOrBlank(undefined))
})

test('isNullOrBlank returns true for a blank string', (t) => {
  t.true(isNullOrBlank(' '))
})

test('isNullOrBlank returns false for a non-blank string', (t) => {
  t.false(isNullOrBlank('not blank'))
})
