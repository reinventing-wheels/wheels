import { re, or, and } from '.'

describe('re', () => {
  describe('re', () => {
    it('should make a regexp from a tagged template literal', () => {
      expect(re('g')`foo ${/bar/} ${'baz'} ${123}`).toEqual(/foo bar baz 123/g)
    })
  })

  describe('and', () => {
    it('should make a regexp from its parts', () => {
      expect(and('g')(/foo/, 'bar', 123)).toEqual(/foobar123/g)
    })
  })

  describe('or', () => {
    it('should make a regexp from its parts', () => {
      expect(or('g')(/foo/, 'bar', 123)).toEqual(/foo|bar|123/g)
    })
  })
})
