export declare const extend: typeof Object.assign;
export declare const overwrite: <T>(target: T, ...sources: Partial<T>[]) => T;
export declare const copy: <T>(object: T) => T;
export declare const get: (object: any, path: string, sep?: string) => any;
export declare const proto: <T>(object: T) => Set<keyof T | "constructor">;
export * from './deep-copy';
//# sourceMappingURL=index.d.ts.map