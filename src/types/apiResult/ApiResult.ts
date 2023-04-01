/**
 * Wraps up all the data that should be included in a return from an API request.
 * @param {boolean} wasSuccess - Whether the call succeeded or not.
 * @param {T} [data] - Optional; What data was returned, if any.
 * @param {string} [message] - Optional; What message the front end should display, if any. Usually to show success, or to explain the reason for failure.
 */
export default interface ApiResult<T> {
  wasSuccess: boolean,
  data?: T,
  message?: string
}