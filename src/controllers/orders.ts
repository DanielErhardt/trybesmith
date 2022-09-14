import { Request, Response } from 'express';
import status from 'http-status';
import service from '../services/orders';

const getAll = async (req: Request, res: Response): Promise<Response> => {
  const orders = await service.getAll();
  return res.status(status.OK).json(orders);
};

export default {
  getAll,
};
