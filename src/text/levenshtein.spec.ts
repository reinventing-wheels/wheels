import { levenshtein } from './levenshtein'

describe('levenshtein', () => {
  const macro = (table: any) => () =>
    it.each(table)('should return %i when %j is compared to %j',
      (expected, a, b) => { expect(levenshtein(a, b)).toBe(expected) })

  describe('empty strings', macro([
    [0, '', ''],
    [3, 'foo', ''],
    [3, '', 'bar']
  ]))

  describe('equal strings', macro([
    [0, 'foo', 'foo'],
    [0, 'bar', 'bar']
  ]))

  describe('different strings', macro([
    [3, 'foo', 'bar'],
    [3, 'bar', 'foo']
  ]))

  describe('substrings', macro([
    [3, 'foo', 'foobar'],
    [3, 'bar', 'foobar'],
    [3, 'foobar', 'foo'],
    [3, 'foobar', 'bar']
  ]))

  describe('upper/lowercase', macro([
    [2, 'FooBar', 'foobar'],
    [6, 'FOOBAR', 'foobar'],
    [2, 'foobar', 'FooBar'],
    [6, 'foobar', 'FOOBAR']
  ]))
})
