import { compiler, compile } from './macro'

describe('macro', () => {
  it('should support custom tags', () => {
    expect(compiler('«', '»', '‹', '›')('«1»‹;›')()).toBe('1')
    expect(compiler('“', '”', '‘', '’')('“1”‘;’')()).toBe('1')
  })

  it('should support ambiguous tags', () => {
    expect(compiler('<%=', '%>', '<%', '%>')('<%=1%><%;%>')()).toBe('1')
    expect(compiler('<<', '>>', '<', '>')('<<1>><;>')()).toBe('1')
    expect(compiler('<', '>', '<<', '>>')('<1><<;>>')()).toBe('1')
  })

  it('should support scope and context', () => {
    const render = compile('√{n} = {sqrt(n)}', Math, 'n')

    expect(render(16)).toBe('√16 = 4')
    expect(render(25)).toBe('√25 = 5')
    expect(render(36)).toBe('√36 = 6')
  })

  it('should support control-flow', () => {
    const compile = compiler('/*=', '*/', '/*-', '*/')
    const render = compile(`
      /*- const WIDTH  = 2 */
      /*- const HEIGHT = 2 */

      int M[/*= HEIGHT */][/*= WIDTH */];

      /*- for(let y = 0; y < HEIGHT; y++) { */
        /*- for(let x = 0; x < WIDTH; x++) { */
          M[/*= y */][/*= x */] = /*= WIDTH*y + x */;
        /*- } */
      /*- } */
    `)

    const expected = 'int M[2][2];M[0][0] = 0;M[0][1] = 1;M[1][0] = 2;M[1][1] = 3;'
    const received = render().trim().replace(/(;)\s*/g, '$1')
    expect(received).toBe(expected)
  })
})
