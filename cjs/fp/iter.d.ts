export declare const filter: <T>(fn: (arg: T) => boolean) => (it: Iterable<T>) => IterableIterator<T>;
export declare const map: <T, U>(fn: (arg: T) => U) => (it: Iterable<T>) => IterableIterator<U>;
export declare const reduce: <T, U>(fn: (acc: U, arg: T) => U) => (acc: U) => (it: Iterable<T>) => U;
export declare const range: (min: number, max: number, step?: number) => IterableIterator<number>;
export declare const matcher: (re: RegExp) => (input: string) => IterableIterator<RegExpExecArray>;
