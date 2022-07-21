export = OpenIdConfigurationResource;
declare class OpenIdConfigurationResource {
    init({ discoveryEndpoint, requestHandler }: {
        discoveryEndpoint: any;
        requestHandler: any;
    }): Promise<void>;
    openIdConfig: any;
    publicKeys: any;
    getAuthorizationEndpoint(): any;
    getUserInfoEndpoint(): any;
    getJwksEndpoint(): any;
    getTokenEndpoint(): any;
    getIssuer(): any;
    getPublicKeys(): Promise<any>;
}
//# sourceMappingURL=OpenIDConfigurationResource.d.ts.map