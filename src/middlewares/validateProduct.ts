import { Request, Response, NextFunction } from 'express';
import { Product } from '../types';
import HttpException from '../utilities/HttpException';
import { productSchema } from './validations';

const validateProduct = async (req: Request, _res: Response, next: NextFunction) => {
  const product = req.body as Product;
  const { error } = productSchema.validate(product);

  if (error) next(HttpException.fromJoiError(error));

  next();
};

export default validateProduct;