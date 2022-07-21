export = Utils;
declare class Utils {
    constructor({ requestHandler, tokenValidator, url, openIdConfigResource, popup, jsrsasign }?: {
        requestHandler?: RequestHandler;
        tokenValidator?: TokenValidator;
        url?: {
            new (url: string | URL, base?: string | URL): URL;
            prototype: URL;
            createObjectURL(obj: Blob | MediaSource): string;
            revokeObjectURL(url: string): void;
        };
        openIdConfigResource: any;
        popup: any;
        jsrsasign?: any;
    });
    URL: {
        new (url: string | URL, base?: string | URL): URL;
        prototype: URL;
        createObjectURL(obj: Blob | MediaSource): string;
        revokeObjectURL(url: string): void;
    };
    request: (url: any, options: any) => Promise<any>;
    tokenValidator: TokenValidator;
    openIdConfigResource: any;
    popup: any;
    rs: any;
    buildParams(params: any): string;
    getRandomString(length: any): any;
    sha256(message: any): any;
    getPKCEFields(): {
        codeVerifier: any;
        codeChallenge: any;
        state: any;
        nonce: any;
    };
    getAuthParamsAndUrl({ clientId, origin, prompt, endpoint, userId, changeDetailsCode }: {
        clientId: any;
        origin: any;
        prompt: any;
        endpoint: any;
        userId: any;
        changeDetailsCode: any;
    }): {
        codeVerifier: any;
        nonce: any;
        state: any;
        url: string;
    };
    performOAuthFlowAndGetTokens({ userId, origin, clientId, endpoint, changeDetailsCode }: {
        userId: any;
        origin: any;
        clientId: any;
        endpoint: any;
        changeDetailsCode: any;
    }): Promise<{
        accessToken: any;
        accessTokenPayload: any;
        idToken: any;
        idTokenPayload: any;
    }>;
    verifyMessage({ message, state }: {
        message: any;
        state: any;
    }): void;
    retrieveTokens({ clientId, authCode, nonce, codeVerifier, windowOrigin }: {
        clientId: any;
        authCode: any;
        nonce: any;
        codeVerifier: any;
        windowOrigin: any;
    }): Promise<{
        accessToken: any;
        accessTokenPayload: any;
        idToken: any;
        idTokenPayload: any;
    }>;
}
import TokenValidator = require("./TokenValidator");
import RequestHandler = require("./RequestHandler");
//# sourceMappingURL=utils.d.ts.map