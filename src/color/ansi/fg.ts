import { r, g, b } from '../rgb/i'
import { wrap, esc } from './util'

const fgʹ = 30
const fgʺ = 60 + fgʹ
const fg = wrap(esc(9 + fgʹ))

export const rgb = (rgb: number) =>
  fg(esc(fgʹ + 8, 2, r(rgb), g(rgb), b(rgb)))

export const
  black        = fg(esc(fgʹ + 0)),
  red          = fg(esc(fgʹ + 1)),
  green        = fg(esc(fgʹ + 2)),
  yellow       = fg(esc(fgʹ + 3)),
  blue         = fg(esc(fgʹ + 4)),
  magenta      = fg(esc(fgʹ + 5)),
  cyan         = fg(esc(fgʹ + 6)),
  lightGray    = fg(esc(fgʹ + 7))

export const
  darkGray     = fg(esc(fgʺ + 0)),
  lightRed     = fg(esc(fgʺ + 1)),
  lightGreen   = fg(esc(fgʺ + 2)),
  lightYellow  = fg(esc(fgʺ + 3)),
  lightBlue    = fg(esc(fgʺ + 4)),
  lightMagenta = fg(esc(fgʺ + 5)),
  lightCyan    = fg(esc(fgʺ + 6)),
  white        = fg(esc(fgʺ + 7))
