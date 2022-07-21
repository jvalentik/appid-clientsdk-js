export = PopupController;
declare class PopupController {
    constructor({ w }?: {
        w?: Window & typeof globalThis;
    });
    window: Window & typeof globalThis;
    init(popupConfig: any): void;
    popupConfig: any;
    open(): void;
    popup: Window;
    navigate(url: any): void;
    close(): void;
    waitForMessage({ messageType }: {
        messageType: any;
    }): Promise<any>;
}
//# sourceMappingURL=PopupController.d.ts.map