export const extend = Object.assign;
export const overwrite = extend;
export const copy = (object) => overwrite({}, object);
export const get = (object, path, sep = '.') => path.split(sep).reduce((o, next) => o && o[next], object);
export const proto = (object) => {
    const props = new Set();
    for (let o = object; o && o !== Object.prototype; o = Object.getPrototypeOf(o))
        Object.getOwnPropertyNames(o).forEach(prop => props.add(prop));
    return props;
};
