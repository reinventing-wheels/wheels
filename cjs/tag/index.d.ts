export declare type Tag<A, R, S = ReadonlyArray<string>> = (strings: S, ...args: A[]) => R;
export declare type Map<A, R> = (arg: A) => R;
export declare const mapArgs: <A, Aʹ, R>(fn: Map<Aʹ, A>, tag: Tag<A, R, readonly string[]>) => Tag<Aʹ, R, readonly string[]>;
export declare const mapStrings: <A, R>(fn: Map<string, any>, tag: Tag<A, R, readonly string[]>) => Tag<A, R, readonly string[]>;
export declare const mapResult: <A, R, Rʹ>(fn: Map<R, Rʹ>, tag: Tag<A, R, readonly string[]>) => Tag<A, Rʹ, readonly string[]>;
export declare const raw: <A, T>(tag: Tag<A, T, readonly string[]>) => Tag<A, T, TemplateStringsArray>;
export declare const tag: <R, A>(fnArg: Map<A, any>, fnStr: Map<string, any>, fnRes: Map<string, R>) => Tag<A, R, readonly string[]>;
export declare const identity: Tag<any, string>;
