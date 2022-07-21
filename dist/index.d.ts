export = AppID;
/**
 * This class provides functions to support authentication.
 */
declare class AppID {
    /**
     * This creates an instance of AppID. Once created, call init() before attempting to sign in.
     * @example
     * const appID = new AppID();
     */
    constructor({ popup, iframe, openIdConfigResource, utils, requestHandler, tokenValidator, w, url }?: {
        popup?: PopupController;
        iframe?: IFrameController;
        openIdConfigResource?: OpenIdConfigurationResource;
        utils: any;
        requestHandler?: RequestHandler;
        tokenValidator?: TokenValidator;
        w?: Window & typeof globalThis;
        url?: {
            new (url: string | URL, base?: string | URL): URL;
            prototype: URL;
            createObjectURL(obj: Blob | MediaSource): string;
            revokeObjectURL(url: string): void;
        };
    });
    popup: PopupController;
    iframe: IFrameController;
    openIdConfigResource: OpenIdConfigurationResource;
    URL: {
        new (url: string | URL, base?: string | URL): URL;
        prototype: URL;
        createObjectURL(obj: Blob | MediaSource): string;
        revokeObjectURL(url: string): void;
    };
    utils: any;
    tokenValidator: TokenValidator;
    request: (url: any, options: any) => Promise<any>;
    window: Window & typeof globalThis;
    initialized: boolean;
    /**
     * Initialize AppID. Call this function before attempting to sign in. You must wait for the promise to resolve.
     * @param {Object} options
     * @param {string} options.clientId - The clientId from the singlepageapp application credentials.
     * @param {string} options.discoveryEndpoint - The discoveryEndpoint from the singlepageapp application credentials.
     * @param {Object} [options.popup] - The popup configuration.
     * @param {Number} options.popup.height - The popup height.
     * @param {Number} options.popup.width - The popup width.
     * @returns {Promise<void>}
     * @throws {AppIDError} For missing required params.
     * @throws {RequestError} Any errors during a HTTP request.
     * @example
     * await appID.init({
     * 	clientId: '<SPA_CLIENT_ID>',
     * 	discoveryEndpoint: '<WELL_KNOWN_ENDPOINT>'
     * });
     *
     */
    init({ clientId, discoveryEndpoint, popup }: {
        clientId: string;
        discoveryEndpoint: string;
        popup?: {
            height: number;
            width: number;
        };
    }): Promise<void>;
    clientId: string;
    /**
     * @typedef {Object} Tokens
     * @property {string} accessToken A JWT.
     * @property {Object} accessTokenPayload The decoded JWT.
     * @property {string} idToken A JWT.
     * @property {Object} idTokenPayload The decoded JWT.
     */
    /**
     * This will open a sign in widget in a popup which will prompt the user to enter their credentials.
     * After a successful sign in, the popup will close and tokens are returned.
     * @returns {Promise<Tokens>} The tokens of the authenticated user.
     * @throws {PopupError} "Popup closed" - The user closed the popup before authentication was completed.
     * @throws {TokenError} Any token validation error.
     * @throws {OAuthError} Any errors from the server according to the [OAuth spec]{@link https://tools.ietf.org/html/rfc6749#section-4.1.2.1}. e.g. {error: 'server_error', description: ''}
     * @throws {RequestError} Any errors during a HTTP request.
     * @example
     * const {accessToken, accessTokenPayload, idToken, idTokenPayload} = await appID.signin();
     */
    signin(): Promise<{
        /**
         * A JWT.
         */
        accessToken: string;
        /**
         * The decoded JWT.
         */
        accessTokenPayload: any;
        /**
         * A JWT.
         */
        idToken: string;
        /**
         * The decoded JWT.
         */
        idTokenPayload: any;
    }>;
    /**
     * Silent sign in allows you to automatically obtain new tokens for a user without the user having to re-authenticate using a popup.
     * This will attempt to authenticate the user in a hidden iframe.
     * You will need to [enable Cloud Directory SSO]{@link https://cloud.ibm.com/docs/services/appid?topic=appid-single-page#spa-silent-login}.
     * Sign in will be successful only if the user has previously signed in using Cloud Directory and their session is not expired.
     * @returns {Promise<Tokens>} The tokens of the authenticated user.
     * @throws {OAuthError} Any errors from the server according to the [OAuth spec]{@link https://tools.ietf.org/html/rfc6749#section-4.1.2.1}. e.g. {error: 'access_denied', description: 'User not signed in'}
     * @throws {IFrameError} "Silent sign-in timed out" - The iframe will close after 5 seconds if authentication could not be completed.
     * @throws {TokenError} Any token validation error.
     * @throws {RequestError} Any errors during a HTTP request.
     * @example
     * const {accessToken, accessTokenPayload, idToken, idTokenPayload} = await appID.silentSignin();
     */
    silentSignin(): Promise<{
        /**
         * A JWT.
         */
        accessToken: string;
        /**
         * The decoded JWT.
         */
        accessTokenPayload: any;
        /**
         * A JWT.
         */
        idToken: string;
        /**
         * The decoded JWT.
         */
        idTokenPayload: any;
    }>;
    /**
     * This method will make a GET request to the [user info endpoint]{@link https://us-south.appid.cloud.ibm.com/swagger-ui/#/Authorization%2520Server%2520-%2520Authorization%2520Server%2520V4/oauth-server.userInfo} using the access token of the authenticated user.
     * @param {string} accessToken The App ID access token of the user.
     * @returns {Promise} The user information for the authenticated user. Example: {sub: '', email: ''}
     * @throws {AppIDError} "Access token must be a string" Invalid access token.
     * @throws {RequestError} Any errors during a HTTP request.
     */
    getUserInfo(accessToken: string): Promise<any>;
    /**
     * This method will open a popup to the change password widget for Cloud Directory users.
     * You must enable users to manage their account from your app in Cloud Directory settings.
     * @param {string} idToken A JWT.
     * @returns {Promise<Tokens>} The tokens of the authenticated user.
     * @throws {AppIDError} "Expect id token payload object to have identities field"
     * @throws {AppIDError} "Must be a Cloud Directory user"
     * @throws {AppIDError} "Missing id token string"
     * @example
     * let tokens = await appID.changePassword(idToken);
     */
    changePassword(idToken: string): Promise<{
        /**
         * A JWT.
         */
        accessToken: string;
        /**
         * The decoded JWT.
         */
        accessTokenPayload: any;
        /**
         * A JWT.
         */
        idToken: string;
        /**
         * The decoded JWT.
         */
        idTokenPayload: any;
    }>;
    /**
     * This method will open a popup to the change details widget for Cloud Directory users.
     * You must enable users to manage their account from your app in Cloud Directory settings.
     * @param {Object} tokens App ID tokens
     * @returns {Promise<Tokens>}
     * @throws {AppIDError} "Missing id token string"
     * @throws {AppIDError} "Missing access token string"
     * @throws {AppIDError} "Missing tokens object"
     * @example
     * let tokens = {accessToken, idToken}
     * let newTokens = await appID.changeDetails(tokens);
     */
    changeDetails({ accessToken, idToken }: any): Promise<{
        /**
         * A JWT.
         */
        accessToken: string;
        /**
         * The decoded JWT.
         */
        accessTokenPayload: any;
        /**
         * A JWT.
         */
        idToken: string;
        /**
         * The decoded JWT.
         */
        idTokenPayload: any;
    }>;
    /**
     *
     * @private
     */
    private _validateInitalize;
}
import PopupController = require("./PopupController");
import IFrameController = require("./IFrameController");
import OpenIdConfigurationResource = require("./OpenIDConfigurationResource");
import TokenValidator = require("./TokenValidator");
import RequestHandler = require("./RequestHandler");
//# sourceMappingURL=index.d.ts.map