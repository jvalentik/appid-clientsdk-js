export = IFrameController;
declare class IFrameController {
    constructor({ w }?: {
        w?: Window & typeof globalThis;
    });
    window: Window & typeof globalThis;
    open(url: any): void;
    iFrame: HTMLIFrameElement;
    remove(): void;
    waitForMessage({ messageType }: {
        messageType: any;
    }): Promise<any>;
}
//# sourceMappingURL=IFrameController.d.ts.map