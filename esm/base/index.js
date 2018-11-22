export const encoder = (alphabet) => (bytes) => convert([...bytes], 0x100, alphabet.length).map(i => alphabet[i]).join('');
export const decoder = (alphabet) => (chars) => convert([...chars].map(c => alphabet.indexOf(c)), alphabet.length, 0x100);
export const convert = (bytes, fromBase, toBase) => {
    const acc = [];
    while (bytes.some(byte => byte > 0))
        acc.push(divmod(bytes, fromBase, toBase));
    return acc.reverse();
};
export const divmod = (bytes, base, divisor) => bytes.reduce((remainder, byte, i, bytes) => {
    const n = base * remainder + byte;
    bytes[i] = Math.floor(n / divisor);
    return n % divisor;
}, 0);
