import { Request, Response } from 'express';
import status from 'http-status';
import service from '../services/users';
// import { User } from '../types';

const create = async (req: Request, res: Response): Promise<Response> => {
  const { body: { username, classe, level, password } } = req;
  const token = await service.create({ username, classe, level, password });
  return res.status(status.CREATED).json({ token });
};

export default {
  create,
};
