import { doctype, minify, encode } from '.'

describe('html', () => {
  it('should work', () => {
    const received = doctype(minify(`
      <div>
        ${encode('<foo>')}
      </div>
    `))
    const expected = '<!doctype html><div>&#60;foo&#62;</div>'
    expect(received).toBe(expected)
  })
})
