export default interface ApiResult<T> {
  wasSuccess: boolean,
  data?: T,
  error?: string
}