export default class HttpException extends Error {
  public readonly httpStatus: number;

  constructor(httpStatus: number, message: string) {
    super(message);
    this.httpStatus = httpStatus;
  }
}
