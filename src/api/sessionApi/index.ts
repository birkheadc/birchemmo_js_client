import ApiResult from "../../types/apiResult/ApiResult";
import { Credentials } from "../../types/credentials/Credentials";
import SessionToken from "../../types/sessionToken/SessionToken";
import _login from "./login/login";
import SessionServerAddress from "./address/address";

/**
 * Attempts to request a session token from the login server asynchronously.
 * @param {Credentials} credentials - The user's username and password.
 * @returns {Promise<ApiResult<SessionToken>>} - The result of the request, containing the SessionToken if successful, or the reason for failure if not.
 */
async function login(credentials: Credentials): Promise<ApiResult<SessionToken>> {
  return await _login(credentials, SessionServerAddress);
}

/**
 * Contains functions pertaining to login sessions.
 */
const SessionApi = {
  login
}

export default SessionApi;