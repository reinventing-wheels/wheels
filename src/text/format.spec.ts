import { f, brackets } from './format'

describe('format', () => {
  type User = typeof user
  const user = { firstName: 'John', lastName: 'Doe' }
  const expected = 'Hello John Doe!'

  describe('f', () => {
    it('should work', () => {
      const render = f`Hello ${(u: User) => `${u.firstName} ${u.lastName}`}!`
      expect(render(user)).toBe(expected)
    })
  })

  describe('brackets', () => {
    it('should insert substitutions by index', () => {
      const render = brackets('Hello {0} {1}!')
      expect(render(user.firstName, user.lastName)).toBe(expected)
    })

    it('should insert substitutions by path', () => {
      const render = brackets('Hello {0.firstName} {0.lastName}!')
      expect(render(user)).toBe(expected)
    })
  })
})
