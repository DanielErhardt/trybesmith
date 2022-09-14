import { Request, Response } from 'express';
import services from '../services/products';

const create = async (req: Request, res: Response): Promise<Response> => {
  const { body: { name, amount } } = req;
  const id = await services.create({ name, amount });  
  return res.status(201).json({ id, name, amount });
};

export default {
  create,
};
