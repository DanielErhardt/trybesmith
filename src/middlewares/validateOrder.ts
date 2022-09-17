import { NextFunction, Request, Response } from 'express';
import { Order } from '../types';
import HttpException from '../utilities/HttpException';
import { orderSchema } from './validations';

const validateOrder = async (req: Request, _res: Response, next: NextFunction) => {
  const order = req.body as Order;
  const { error } = orderSchema.validate(order);

  if (error) next(HttpException.fromJoiError(error));

  next();
};

export default validateOrder;