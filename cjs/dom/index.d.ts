export declare type IElement = <N extends keyof HTMLElementTagNameMap>(name: N) => (options?: Partial<HTMLElementTagNameMap[N]>) => HTMLElementTagNameMap[N];
export declare const element: IElement;
export declare const append: (parent: Element) => (...children: Element[]) => void;
export declare const prevent: <E extends Event>(fn?: ((event: E) => any) | undefined) => (event: E) => any;
export declare const frame: () => Promise<{}>;
export declare const context2d: (options?: Partial<HTMLCanvasElement> | undefined) => CanvasRenderingContext2D;
