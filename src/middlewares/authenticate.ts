import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import { JwtPayload } from 'jsonwebtoken';
import HttpException from '../utilities/HttpException';
import token from '../utilities/token';

const authenticate = async (req: Request, _res: Response, next: NextFunction) => {
  const { headers: { authorization } } = req;

  if (!authorization) return next(new HttpException(httpStatus.UNAUTHORIZED, 'Token not found'));

  try {
    const { id: userId } = token.verify(authorization) as JwtPayload;
    req.headers.userId = userId;
    next();
  } catch (error) {
    next(new HttpException(httpStatus.UNAUTHORIZED, 'Invalid token'));
  } 
};

export default authenticate;