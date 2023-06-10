import { Role } from "../role/role"

/**
 * A wrapper for a JSON web token.
 * All of the actual data of the token is stored in the token string.
 * The session token profile rides along with the token for convenience, but may contain incorrect values and should be verified if necessary.
 * The backend api / server only uses the token string.
 * @param {string} token - The token string.
 * @param {Data} expires - The date that this token will expire. It is not necessarily accurate.
 */
export interface ISessionToken {
  token: string,
  profile: SessionTokenProfile
  getAuthorization: () => string
}

export interface SessionTokenProfile {
  expires: Date,
  username: string,
  role: Role
}

export class SessionToken implements ISessionToken {

  token: string;
  profile: SessionTokenProfile

  constructor(token: string, profile: SessionTokenProfile) {
    this.token = token;
    this.profile = profile
  }

  getAuthorization(): string {
    return 'not yet implemented';
  }
}