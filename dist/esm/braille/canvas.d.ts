export declare type ICanvas = Uint8Array[];
export declare type ICanvasRender = (canvas: ICanvas) => string;
export declare type ICanvasCreate = (width: number, height: number) => ICanvas;
export declare type ICanvasEdit = (canvas: ICanvas, x: number, y: number) => number;
export declare type ICanvasFill = (canvas: ICanvas, fn: (x: number, y: number) => number) => void;
export declare const render: ICanvasRender;
export declare const create: ICanvasCreate;
export declare const toggle: ICanvasEdit;
export declare const on: ICanvasEdit;
export declare const off: ICanvasEdit;
export declare const fill: ICanvasFill;
//# sourceMappingURL=canvas.d.ts.map