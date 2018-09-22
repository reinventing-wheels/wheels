import { sanitize } from './sanitize'

describe('sanitize', () => {
  describe('unsafe stuff', () => {
    it.each([
      '\0',
      '\b',
      '\f',
      '\r',
      '\v'
    ])('should remove %j', input => {
      expect(sanitize(input)).toBe('')
    })
  })

  describe('space-like symbols', () => {
    it.each([
      '\n',
      '\t',
      '\xa0' // nbsp
    ])('should replace %j to a space', input => {
      expect(sanitize(input)).toBe(' ')
    })
  })
})
