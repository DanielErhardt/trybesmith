import { ValidationError } from 'joi';

export default class HttpException extends Error {
  public readonly httpStatus: number;

  constructor(httpStatus: number, message: string) {
    super(message);
    this.httpStatus = httpStatus;
  }

  public static fromJoiError = (joiError: ValidationError): HttpException => {
    const [code, message] = joiError.details[0].message.split('|');
    return new HttpException(Number(code), message);
  };
}
