export declare const escape: (arg: any) => string;
export declare const re: (flags?: string) => ([first, ...rest]: TemplateStringsArray, ...args: any[]) => RegExp;
export declare const join: (sep: string) => (flags?: string) => (...parts: any[]) => RegExp;
export declare const and: (flags?: string) => (...parts: any[]) => RegExp;
export declare const or: (flags?: string) => (...parts: any[]) => RegExp;
export declare const r: ([first, ...rest]: TemplateStringsArray, ...args: any[]) => RegExp;
//# sourceMappingURL=index.d.ts.map