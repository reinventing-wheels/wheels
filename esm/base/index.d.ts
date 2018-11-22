export declare const encoder: (alphabet: string[]) => (bytes: Iterable<number>) => string;
export declare const decoder: (alphabet: string[]) => (chars: Iterable<string>) => number[];
export declare const convert: (bytes: number[], fromBase: number, toBase: number) => number[];
export declare const divmod: (bytes: number[], base: number, divisor: number) => number;
