/**
 * Contains the information needed for logging in.
 * The password is in plain-text, so do not store this object anywhere, and only send it over secure connections.
 * @param {string} username - User's username.
 * @param {string} password - User's password in plain-text.
 */
export interface ICredentials {
  username: string,
  password: string,
  getAuthorization: () => string,
  [key: string]: string | Function
}

export class Credentials implements ICredentials {

  username: string;
  password: string;

  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
  }

  getAuthorization = (): string => {
    const buffer = Buffer.from(`${this.username}:${this.password}`, 'utf-8');
    return 'Basic ' + buffer.toString('base64');
  }

  [key: string]: string | Function;
}