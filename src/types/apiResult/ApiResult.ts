/**
 * Wraps up all the data that should be included in a return from an API request.
 * @param {boolean} wasSuccess - Whether the call succeeded or not.
 * @param {T} [data] - Optional; What data was returned, if any.
 * @param {string} [message] - Optional; What message the front end should display, if any. Usually to show success, or to explain the reason for failure.
 */
export interface IApiResult<T> {
  wasSuccess: () => boolean,
  status: number,
  data: T | null,
  message: string | null
}

export class ApiResult<T> implements IApiResult<T> {
  status: number;
  data: T | null;
  message: string | null;

  constructor(status: number, data: T | null, message: string | null) {
    this.status = status;
    this.data = data;
    this.message = message;
  }

  wasSuccess() {
    return (Math.floor(this.status / 100)) === 2;
  };
}