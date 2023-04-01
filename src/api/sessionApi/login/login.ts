import ApiResult from "../../../types/apiResult/ApiResult";
import { Credentials } from "../../../types/credentials/Credentials";
import SessionToken from "../../../types/sessionToken/SessionToken";
import fetchGet from "../../shared/fetchGet/fetchGet";

/**
 * Attempts to request a session token from the login server asynchronously.
 * @param {Credentials} credentials - The user's username and password.
 * @param {string} url - The address of the server.
 * @returns {Promise<ApiResult<SessionToken>>} - The result of the request, containing the SessionToken if successful, or the reason for failure if not.
 */
export default async function login(credentials: Credentials, url: string): Promise<ApiResult<SessionToken>> {
  return await fetchGet<SessionToken>(credentials, url);
}