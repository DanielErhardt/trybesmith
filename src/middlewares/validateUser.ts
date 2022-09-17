import { NextFunction, Request, Response } from 'express';
import { User } from '../types';
import HttpException from '../utilities/HttpException';
import { userSchema } from './validations';

const validateUser = async (req: Request, _res: Response, next: NextFunction) => {
  const user = req.body as User;
  const { error } = userSchema.validate(user);

  if (error) next(HttpException.fromJoiError(error));
  
  next();
};

export default validateUser;
