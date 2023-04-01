/**
 * A wrapper for a JSON web token that also includes the date that it will expire, so the front-end can proactively request a new one when needed.
 * @param {string} token - The token string.
 * @param {Data} expires - The date that this token will expire. It is not necessarily accurate.
 */
export default interface SessionToken {
  token: string,
  expires: Date,
  getAuthorization: () => string
}