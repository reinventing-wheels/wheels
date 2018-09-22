export declare const escape: (arg: any) => string;
export declare const re: (flags?: string) => import("../tag").Tag<any, RegExp, TemplateStringsArray>;
export declare const join: (sep: string) => (flags?: string) => (...parts: any[]) => RegExp;
export declare const and: (flags?: string) => (...parts: any[]) => RegExp;
export declare const or: (flags?: string) => (...parts: any[]) => RegExp;
