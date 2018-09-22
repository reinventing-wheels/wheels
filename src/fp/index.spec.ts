import { range, filter, sum, or } from '.'

describe('fp', () => {
  it('should work', () => {
    // https://projecteuler.net/problem=1
    const multipleOf = (m: number) => (n: number) => n%m === 0
    const multiplesOf3or5 = filter(or(multipleOf(3), multipleOf(5)))
    expect(sum(multiplesOf3or5(range(1, 1000)))).toBe(233168)
  })
})
