import { renderer, render } from './template'

describe('template', () => {
  const user = { firstName: 'John', lastName: 'Doe' }
  const expected = 'Hello John Doe!'

  describe('renderer', () => {
    it('should have `$` by default', () => {
      const render = renderer('Hello ${$.firstName} ${$.lastName}!')
      expect(render(user)).toBe(expected)
    })

    it('should be configurable', () => {
      const render = renderer('Hello ${_.firstName} ${_.lastName}!', '_')
      expect(render(user)).toBe(expected)
    })
  })

  describe('render', () => {
    it('should have `$` by default', () => {
      const rendered = render('Hello ${$.firstName} ${$.lastName}!', user)
      expect(rendered).toBe(expected)
    })

    it('should be configurable', () => {
      const rendered = render('Hello ${_.firstName} ${_.lastName}!', user, '_')
      expect(rendered).toBe(expected)
    })

    it('should have destructured props', () => {
      const rendered = render('Hello ${firstName} ${lastName}!', user)
      expect(rendered).toBe(expected)
    })
  })
})
