import ApiResult from "../../../types/apiResult/ApiResult";
import { Credentials } from "../../../types/credentials/Credentials";
import SessionToken from "../../../types/sessionToken/SessionToken";

export default async function fetchGet<T>(credentials: Credentials | SessionToken, url: string): Promise<ApiResult<T>> {
  console.log(credentials.getAuthorization());
  try {
    let response = await fetch(url, {
      method: 'GET',
      headers: {
        'Authorization': credentials.getAuthorization()
      }
    });
    if (response.status !== 200) {
      return {
        wasSuccess: false,
        message: 'Failed to connect to server. ' + response.statusText
      }
    }
    try {
      console.log('Response: ', response);
      let data: any = await response.json();
      console.log(data);
      return {
        wasSuccess: true,
        data: data,
        message: 'Success! Logging in...'
      }
    } catch {
      return {
        wasSuccess: false,
        message: 'Data was of unexpected type.'
      }
    }
    
  } catch {
    return {
      wasSuccess: false,
      message: 'Failed to connect to server.' 
    }
  }
}