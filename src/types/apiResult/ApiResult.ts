import { HttpStatusCode } from "../httpStatusCode/httpStatusCode";

/**
 * Wraps up all the data that should be included in a return from an API request.
 * @param {boolean} isSuccess Shorthand for checking that the status code was 2##.
 * @param {HttpStatusCode | number} status The http status code of the api call. It is typed this way to explicitly show that either is usable, but the enum HttpStatusCode is preferred.
 * @param {T | null} data What data was returned, if any.
 * @param {string | null} message What message the front end should display, if any. Usually to explain the reason for failure.
 */
export interface IApiResult<T> {
  isSuccess: boolean,
  status: HttpStatusCode | number,
  data: T | null,
  message: string | null
}

export class ApiResult<T> implements IApiResult<T> {
  status: number;
  data: T | null;
  message: string | null;
  isSuccess: boolean;

  constructor(status: number, data: T | null, message: string | null) {
    this.status = status;
    this.data = data;
    this.message = message;
    this.isSuccess = (Math.floor(status / 100)) === 2;
  }
}