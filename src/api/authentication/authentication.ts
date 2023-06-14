import { ApiResult, IApiResult } from "../../types/apiResult/ApiResult";
import { AuthenticationConfig, Config } from "../../types/config/config";
import { ICredentials } from "../../types/credentials/Credentials";
import { HttpStatusCode } from "../../types/httpStatusCode/httpStatusCode";
import { Role } from "../../types/role/role";
import { ISessionToken, SessionToken, SessionTokenProfile } from "../../types/sessionToken/SessionToken";

async function login(config: AuthenticationConfig, credentials: ICredentials): Promise<IApiResult<ISessionToken>> {
  return config.isMockAuthentication ? loginMock(credentials, config.mock.users) : loginServer(credentials);
}

async function loginServer(credentials: ICredentials): Promise<IApiResult<ISessionToken>> {
  return Promise.resolve(
    new ApiResult<ISessionToken>(
      HttpStatusCode.NOT_YET_IMPLEMENTED, null, 'Server Login not yet implemented. Please use Mock Login.'
    ));
}

async function loginMock(credentials: ICredentials, users: { id: string, username: string, password: string, role: Role}[]): Promise<IApiResult<ISessionToken>> {
  for (const user of users) {
    if (user.username === credentials.username && user.password === credentials.password) {
      return Promise.resolve(
        new ApiResult<ISessionToken>(
          HttpStatusCode.SUCCESS, createSessionTokenForUser(user), null
        ));
    }
  }
  return Promise.resolve(
    new ApiResult<ISessionToken>(
      HttpStatusCode.UNAUTHORIZED, null, 'Credentials do not match a user in the config file.'
    ));
}

function createSessionTokenForUser(user: { id: string, username: string, password: string, role: Role }): ISessionToken {
  const token: string = 'todo';
  const date = new Date();
  date.setDate(date.getDate() + 1);

  const profile: SessionTokenProfile = {
    expires: date,
    userId: user.id,
    role: user.role
  }

  return new SessionToken(token, profile);
}

export default {
  login
}

// export default class AuthenticationService {
//   constructor(private config: Config) {
//     // Log this for now because I'm trying to convince myself that I'm not instantiating one of these every render or something...
//     console.log('Authentication Service Constructed with config: ', config);
//   }

//   login(credentials: ICredentials): Promise<IApiResult<ISessionToken>> {
//     return this.config.authentication.isMockAuthentication ? this.mockLogin(credentials) : this.loginServer(credentials);
//   }

//   private loginServer(credentials: ICredentials): Promise<IApiResult<ISessionToken>> {
//     return Promise.resolve(
//       new ApiResult<ISessionToken>(
//         HttpStatusCode.NOT_YET_IMPLEMENTED, null, 'Server Login not yet implemented. Please use Mock Login.'
//       ));
//   }

//   private mockLogin(credentials: ICredentials): Promise<IApiResult<ISessionToken>> {
//     for (const user of this.config.authentication.mock.users) {
//       if (user.username === credentials.username && user.password === credentials.password) {
//         return Promise.resolve(
//           new ApiResult<ISessionToken>(
//             HttpStatusCode.SUCCESS, this.createSessionTokenForUser(user), null
//           ));
//       }
//     }
//     return Promise.resolve(
//       new ApiResult<ISessionToken>(
//         HttpStatusCode.UNAUTHORIZED, null, 'Credentials do not match a user in the config file.'
//       ));
//   }

//   private createSessionTokenForUser(user: { username: string, password: string, role: Role }): ISessionToken {
//     const token: string = 'todo';
//     const date = new Date();
//     date.setDate(date.getDate() + 1);

//     const profile: SessionTokenProfile = {
//       expires: date,
//       username: user.username,
//       role: user.role
//     }

//     return new SessionToken(token, profile);
//   }
// }