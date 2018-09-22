import { Component, Props } from './types';
export declare const isSelfClosing: (arg: string) => boolean;
export declare const isElement: (arg: any) => arg is JSX.Element;
export declare const isComponent: (arg: any) => arg is Component<Props>;
export declare const toSafeString: (arg: any) => string;
