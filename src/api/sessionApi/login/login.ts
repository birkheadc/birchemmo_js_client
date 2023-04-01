import ApiResult from "../../../types/apiResult/ApiResult";
import Credentials from "../../../types/credentials/Credentials";
import SessionToken from "../../../types/sessionToken/SessionToken";

export default async function login(credentials: Credentials): Promise<ApiResult<SessionToken>> {
  return {
    wasSuccess: false,
    message: 'Fail'
  }
}