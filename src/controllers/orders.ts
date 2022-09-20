import { Request, Response } from 'express';
import status from 'http-status';
import service from '../services/orders';

const getAll = async (req: Request, res: Response): Promise<Response> => {
  const orders = await service.getAll();
  return res.status(status.OK).json(orders);
};

const create = async (req: Request, res: Response) => {
  const userId = Number(req.headers.userId);
  const { body: { productsIds } } = req;

  const createdOrder = await service.create({ userId, productsIds });
  res.status(status.CREATED).json(createdOrder);
};

export default {
  getAll,
  create,
};
