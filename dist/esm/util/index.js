export const tuple = (arr) => arr;
export const firstNonNull = (...args) => {
    for (const arg of args)
        if (arg != null)
            return arg;
};
