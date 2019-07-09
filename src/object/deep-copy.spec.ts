// tslint:disable:only-arrow-functions
import { deepCopy } from './deep-copy'

it('should sort indices by values', () => {
  const symbol = Symbol()

  const original = {
    [symbol]: symbol,
    null: null,
    undefined: undefined,
    function: function () {},
    arrowFunction: () => {},
    array: [1, 2, 3],
    nested: { foo: 1, bar: 2 },
    instance: new class { foo = 1 }
  }

  const cloned = deepCopy(original)

  expect(original[symbol]).toBe(cloned[symbol])
  expect(original.null).toBe(cloned.null)
  expect(original.undefined).toBe(cloned.undefined)
  expect(original.function).toBe(cloned.function)
  expect(original.arrowFunction).toBe(cloned.arrowFunction)

  expect(original.array).not.toBe(cloned.array)
  expect(original.array).toEqual(cloned.array)

  expect(original.nested).not.toBe(cloned.nested)
  expect(original.nested).toEqual(cloned.nested)

  expect(original.instance).not.toBe(cloned.instance)
  expect(original.instance).toEqual(cloned.instance)
  expect(Object.getPrototypeOf(original.instance))
    .toBe(Object.getPrototypeOf(cloned.instance))
})
