import { tag, raw, identity } from '.'

describe('tag', () => {
  describe('tag', () => {
    it('should work', () => {
      const wrap = ([a, b]: string) => (arg: any) => a + arg + b
      const wrapTag = tag(wrap('()'), wrap('[]'), wrap('{}'))
      const received = wrapTag`foo${'bar'}baz`
      const expected = '{[foo](bar)[baz]}'
      expect(received).toBe(expected)
    })
  })

  describe('raw', () => {
    it('should behave like String.raw', () => {
      const received = raw(identity)`\n${'\n'}\n`
      const expected = String.raw`\n${'\n'}\n`
      expect(received).toBe(expected)
    })
  })
})
