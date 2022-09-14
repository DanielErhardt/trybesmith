import { Request, Response } from 'express';
import status from 'http-status';
import services from '../services/products';

const getAll = async (_req: Request, res: Response): Promise<Response> => {  
  const products = await services.getAll();
  return res.status(status.OK).json(products);
};

const create = async (req: Request, res: Response): Promise<Response> => {
  const { body: { name, amount } } = req;
  const id = await services.create({ name, amount });  
  return res.status(status.CREATED).json({ id, name, amount });
};

export default {
  getAll,
  create,
};
