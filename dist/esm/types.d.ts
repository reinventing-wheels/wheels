export declare type B = boolean;
export declare type N = number;
export declare type S = string;
export declare type Fn<T, R> = (arg: T) => R;
export declare type Mutable<T> = {
    -readonly [P in keyof T]: T[P];
};
//# sourceMappingURL=types.d.ts.map