export = OAuthError;
declare class OAuthError extends Error {
    constructor({ error, description }: {
        error: any;
        description: any;
    });
    error: any;
    description: any;
}
//# sourceMappingURL=OAuthError.d.ts.map