export declare type ICanvas = Uint8Array[];
export declare type ICanvasCreate = (width: number, height: number) => ICanvas;
export declare type ICanvasMutate = (canvas: ICanvas, x: number, y: number) => number;
export declare type ICanvasRender = (canvas: ICanvas) => string;
export declare const create: ICanvasCreate;
export declare const toggle: ICanvasMutate;
export declare const set: ICanvasMutate;
export declare const unset: ICanvasMutate;
export declare const render: ICanvasRender;
