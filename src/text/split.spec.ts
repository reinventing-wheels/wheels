import { split } from './split'

describe('split', () => {
  it('should handle words', () => {
    const actual = [...split(`foo bar baz`)]
    const expected = [`foo`, `bar`, `baz`]
    expect(actual).toEqual(expected)
  })

  it('should handle escapes', () => {
    const actual = [...split(`foo n\\' bar foo\\ bar`)]
    const expected = [`foo`, `n'`, `bar`, `foo bar`]
    expect(actual).toEqual(expected)
  })

  it('should handle quotes', () => {
    const actual = [...split(`foo 'foo bar' bar "foo bar" baz`)]
    const expected = [`foo`, `foo bar`, `bar`, `foo bar`, `baz`]
    expect(actual).toEqual(expected)
  })

  it('should handle empty quotes', () => {
    const actual = [...split(`foo '' bar "" baz`)]
    const expected = [`foo`, ``, `bar`, ``, `baz`]
    expect(actual).toEqual(expected)
  })

  it('should handle nested quotes', () => {
    const actual = [...split(`foo 'foo "bar" baz' bar "foo 'bar' baz" baz`)]
    const expected = [`foo`, `foo "bar" baz`, `bar`, `foo 'bar' baz`, `baz`]
    expect(actual).toEqual(expected)
  })

  it('should handle escaped nested quotes', () => {
    const actual = [...split(`foo 'foo \\'bar\\' baz' bar "foo \\"bar\\" baz" baz`)]
    const expected = [`foo`, `foo 'bar' baz`, `bar`, `foo "bar" baz`, `baz`]
    expect(actual).toEqual(expected)
  })

  it('should handle redundant spaces', () => {
    const actual = [...split(` foo \t \t bar \r\n baz `)]
    const expected = [`foo`, `bar`, `baz`]
    expect(actual).toEqual(expected)
  })

  it('should handle complex arguments', () => {
    const actual = [...split(`foo --'bar = baz' --"bar = baz" --'bar '=" baz"`)]
    const expected = [`foo`, `--bar = baz`, `--bar = baz`, `--bar = baz`]
    expect(actual).toEqual(expected)
  })

  it('should throw on invalid syntax', () => {
    const fn = () => [...split(`foo ' bar " baz`)]
    expect(fn).toThrow(SyntaxError)
  })
})
