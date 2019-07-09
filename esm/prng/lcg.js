export const factory = (a, c) => (seed = 1) => {
    let x = seed;
    return () => x = x * a + c >>> 0;
};
export const lcg = factory(1664525, 1013904223);
