import { r, g, b } from '../rgb/i';
import { wrap, esc } from './util';
const bgʹ = 40;
const bgʺ = 60 + bgʹ;
const bg = wrap(esc(9 + bgʹ));
export const rgb = (rgb) => bg(esc(bgʹ + 8, 2, r(rgb), g(rgb), b(rgb)));
export const black = bg(esc(bgʹ + 0)), red = bg(esc(bgʹ + 1)), green = bg(esc(bgʹ + 2)), yellow = bg(esc(bgʹ + 3)), blue = bg(esc(bgʹ + 4)), magenta = bg(esc(bgʹ + 5)), cyan = bg(esc(bgʹ + 6)), lightGray = bg(esc(bgʹ + 7));
export const darkGray = bg(esc(bgʺ + 0)), lightRed = bg(esc(bgʺ + 1)), lightGreen = bg(esc(bgʺ + 2)), lightYellow = bg(esc(bgʺ + 3)), lightBlue = bg(esc(bgʺ + 4)), lightMagenta = bg(esc(bgʺ + 5)), lightCyan = bg(esc(bgʺ + 6)), white = bg(esc(bgʺ + 7));
