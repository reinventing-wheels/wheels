import { renderer, render } from './template'

describe('template', () => {
  describe('renderer', () => {
    it('should support locals and context', () => {
      const render = renderer('√${n} = ${sqrt(n)}', Math, 'n')

      expect(render(16)).toBe('√16 = 4')
      expect(render(25)).toBe('√25 = 5')
      expect(render(36)).toBe('√36 = 6')
    })
  })

  describe('render', () => {
    const user = { firstName: 'John', lastName: 'Doe' }
    const expected = 'Hello John Doe!'

    it('should support context', () => {
      const received = render('Hello ${firstName} ${lastName}!', user)
      expect(received).toBe(expected)
    })

    it('should support context by reference', () => {
      const received = render('Hello ${$.firstName} ${$.lastName}!', user)
      expect(received).toBe(expected)
    })
  })
})
