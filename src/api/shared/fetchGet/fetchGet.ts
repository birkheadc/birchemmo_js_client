import { ApiResult, IApiResult } from "../../../types/apiResult/ApiResult";
import { ICredentials } from "../../../types/credentials/Credentials";
import { HttpStatusCode } from "../../../types/httpStatusCode/httpStatusCode";
import { ISessionToken } from "../../../types/sessionToken/SessionToken";

export default async function fetchGet<T>(credentials: ICredentials | ISessionToken, url: string): Promise<IApiResult<T>> {
  try {
    let response = await fetch(url, {
      method: 'GET',
      headers: {
        'Authorization': credentials.getAuthorization()
      }
    });
    if (isSuccess(response.status) === false) {
      return new ApiResult<T>(response.status, null, 'Failed to fetch data from server.');
    }
    try {
      let data: T = await response.json();
      return new ApiResult<T>(response.status, data, null);
    } catch {
      return new ApiResult<T>(response.status, null, 'Data was of unexpected type.');
    }
  } catch {
    return new ApiResult<T>(HttpStatusCode.SERVICE_UNAVAILABLE, null, 'Failed to connect to server.');
  }
}

function isSuccess(statusCode: number): boolean {
  return (Math.floor(statusCode / 100)) === 2;
}