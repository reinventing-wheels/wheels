export declare type IFormat = (...args: any[]) => string;
export declare type IFormatTag = <T>([head, ...tail]: ReadonlyArray<string>, ...fns: ((obj: T) => any)[]) => (obj: T) => string;
export declare const tag: IFormatTag;
export declare const format: (re: RegExp) => (tmpl: string) => IFormat;
export declare const brackets: (tmpl: string) => IFormat;
export declare const hashBrackets: (tmpl: string) => IFormat;
export declare const dollarBrackets: (tmpl: string) => IFormat;
export declare const doubleBrackets: (tmpl: string) => IFormat;
