import { Request, Response, NextFunction } from 'express';
import status from 'http-status';
import HttpException from '../utilities/HttpException';

const errorHandler = async (err: Error, req: Request, res: Response, _next: NextFunction) => {
  const { httpStatus, message } = err as HttpException;
  return httpStatus
    ? res.status(httpStatus).json({ message })
    : res.status(status.INTERNAL_SERVER_ERROR).json(err);
};

export default errorHandler;
