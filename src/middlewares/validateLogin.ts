import { Request, Response, NextFunction } from 'express';
import { userLoginSchema } from './validations';
import HttpException from '../utilities/HttpException';

const validateLogin = (req: Request, _res: Response, next: NextFunction) => {
  const { body: { username, password } } = req;
  const { error } = userLoginSchema.validate({ username, password });
  if (error) next(HttpException.fromJoiError(error));
  next();
};

export default validateLogin;