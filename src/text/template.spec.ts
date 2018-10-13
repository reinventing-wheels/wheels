import { renderer, render } from './template'

describe('template', () => {
  const user = { firstName: 'John', lastName: 'Doe' }
  const expected = 'Hello John Doe!'

  describe('renderer', () => {
    it('should work', () => {
      const render = renderer('Hello ${$.firstName} ${$.lastName}!')
      expect(render(user)).toBe(expected)
    })
  })

  describe('render', () => {
    it('should work', () => {
      const rendered = render('Hello ${firstName} ${lastName}!', user)
      expect(rendered).toBe(expected)
    })
  })
})
