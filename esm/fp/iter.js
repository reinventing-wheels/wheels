export const filter = (fn) => function* (it) {
    for (const value of it)
        if (fn(value))
            yield value;
};
export const map = (fn) => function* (it) {
    for (const value of it)
        yield fn(value);
};
export const reduce = (fn) => (acc) => (it) => {
    let accʹ = acc;
    for (const value of it)
        accʹ = fn(accʹ, value);
    return accʹ;
};
export const range = function* (min, max, step = 1) {
    for (let number = min; number < max; number += step)
        yield number;
};
export const matcher = (re) => function* (input) {
    for (let match; match = re.exec(input);)
        yield match;
};
