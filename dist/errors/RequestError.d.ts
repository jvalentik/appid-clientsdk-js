export = RequestError;
declare class RequestError extends Error {
    constructor(description: any, status: any, originError: any);
    status: any;
    originError: any;
}
//# sourceMappingURL=RequestError.d.ts.map