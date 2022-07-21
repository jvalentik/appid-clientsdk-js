export = TokenValidator;
declare class TokenValidator {
    constructor({ jwt }?: {
        jwt?: any;
    });
    jwt: any;
    decodeAndValidate({ token, publicKeys, issuer, clientId, nonce }: {
        token: any;
        publicKeys: any;
        issuer: any;
        clientId: any;
        nonce: any;
    }): any;
    getPublicKey(keys: any, kid: any): any;
}
//# sourceMappingURL=TokenValidator.d.ts.map