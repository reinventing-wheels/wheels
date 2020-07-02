import * as bg from './bg';
import * as fg from './fg';
import { wrap, esc } from './util';
export const bold = wrap(esc(22))(esc(1)), dim = wrap(esc(22))(esc(2)), underlined = wrap(esc(24))(esc(4)), blink = wrap(esc(25))(esc(5)), reverse = wrap(esc(27))(esc(7)), hidden = wrap(esc(28))(esc(8));
export { bg, fg };
export * from './util';
