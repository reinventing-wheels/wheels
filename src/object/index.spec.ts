import { proto } from '.'

describe('object', () => {
  describe('proto', () => {
    it('should collect all object properties including inherited ones', () => {
      class Baz             { baz() {} }
      class Bar extends Baz { bar() {} }
      class Foo extends Bar { foo() {} }

      const received = proto(new Foo)
      const expected = new Set([ 'constructor', 'foo', 'bar', 'baz' ])
      expect(received).toEqual(expected)
    })
  })
})
