export declare const f: <T>([head, ...tail]: TemplateStringsArray, ...fns: ((arg: T) => any)[]) => (arg: T) => string;
export declare const format: (re: RegExp) => (tmpl: string) => (...args: any[]) => string;
export declare const brackets: (tmpl: string) => (...args: any[]) => string;
export declare const hashBrackets: (tmpl: string) => (...args: any[]) => string;
export declare const dollarBrackets: (tmpl: string) => (...args: any[]) => string;
export declare const doubleBrackets: (tmpl: string) => (...args: any[]) => string;
