"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.encoder = (alphabet) => (bytes) => exports.convert([...bytes], 0x100, alphabet.length).map(i => alphabet[i]).join('');
exports.decoder = (alphabet) => (chars) => exports.convert([...chars].map(c => alphabet.indexOf(c)), alphabet.length, 0x100);
exports.convert = (bytes, fromBase, toBase) => {
    const acc = [];
    while (bytes.some(byte => byte > 0))
        acc.push(exports.divmod(bytes, fromBase, toBase));
    return acc.reverse();
};
exports.divmod = (bytes, base, divisor) => bytes.reduce((remainder, byte, i, bytes) => {
    const n = base * remainder + byte;
    bytes[i] = Math.floor(n / divisor);
    return n % divisor;
}, 0);
