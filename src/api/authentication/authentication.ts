import { ApiResult, IApiResult } from "../../types/apiResult/ApiResult";
import { AuthenticationConfig, Config } from "../../types/config/config";
import { ICredentials } from "../../types/credentials/Credentials";
import { HttpStatusCode } from "../../types/httpStatusCode/httpStatusCode";
import { Role } from "../../types/role/role";
import jwt from 'jwt-simple';

async function login(config: AuthenticationConfig, credentials: ICredentials): Promise<IApiResult<string | null>> {
  return config.isMockAuthentication ? loginMock(credentials, config) : loginServer(credentials);
}

async function loginServer(credentials: ICredentials): Promise<IApiResult<string | null>> {
  return Promise.resolve(
    new ApiResult<string | null>(
      HttpStatusCode.NOT_YET_IMPLEMENTED, null, 'Server Login not yet implemented. Please use Mock Login.'
    ));
}

async function loginMock(credentials: ICredentials, config: AuthenticationConfig): Promise<IApiResult<string | null>> {
  for (const user of config.mock.users) {
    if (user.username === credentials.username && user.password === credentials.password) {
      return Promise.resolve(
        new ApiResult<string | null>(
          HttpStatusCode.SUCCESS, createSessionTokenForUser(user, config), null
        ));
    }
  }
  return Promise.resolve(
    new ApiResult<string | null>(
      HttpStatusCode.UNAUTHORIZED, null, 'Credentials do not match a user in the config file.'
    ));
}

function createSessionTokenForUser(user: { id: string, username: string, password: string, role: Role }, config: AuthenticationConfig): string {
  
  const payload = { sub: user.id, name: user.username, role: user.role };
  const secret = Buffer.from(config.mock.jwtSecretKey, 'utf8');
  const expiresInSeconds = 60 * 60 * 24;
  const currentTime = Math.floor(Date.now() / 1000);
  const expiresTime = currentTime + expiresInSeconds;

  const token: string = jwt.encode({
    ...payload,
    exp: expiresTime
  },
  secret.toString());

  return token;
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