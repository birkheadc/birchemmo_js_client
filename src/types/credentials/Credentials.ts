/**
 * Contains the information needed for logging in.
 * The password is in plain-text, so do not store this object anywhere, and only send it over secure connections.
 * @param {string} username - User's username.
 * @param {string} password - User's password in plain-text.
 */
export default interface Credentials {
  username: string,
  password: string
}