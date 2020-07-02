"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.split = void 0;
const ESCAPE = /\\/;
const QUOTE = /'|"/;
const SPACE = /\s/;
exports.split = function* (input) {
    let escape = false;
    let quote = null;
    let arg = null;
    for (const char of input) {
        const isEscape = ESCAPE.test(char);
        const isQuote = QUOTE.test(char);
        const isSpace = SPACE.test(char);
        if (!isSpace && arg == null)
            arg = '';
        if (escape) {
            arg += char;
            escape = false;
        }
        else if (isEscape) {
            escape = true;
        }
        else if (isQuote && !quote) {
            quote = char;
        }
        else if (isQuote && quote === char) {
            quote = null;
        }
        else if (isSpace && !quote && arg != null) {
            yield arg;
            arg = null;
        }
        else if (arg != null) {
            arg += char;
        }
    }
    if (escape || quote)
        throw new SyntaxError;
    if (arg != null)
        yield arg;
};
