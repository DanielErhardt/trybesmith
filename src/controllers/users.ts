import { Request, Response } from 'express';
import status from 'http-status';
import service from '../services/users';
import { UserLogin, User } from '../types';

const login = async (req: Request, res: Response) => {
  const loginInfo = req.body as UserLogin;  
  const token = await service.findByLoginInfo(loginInfo);
  res.status(status.OK).json({ token });
};

const create = async (req: Request, res: Response): Promise<Response> => {
  const user = req.body as User;
  const token = await service.create(user);
  return res.status(status.CREATED).json({ token });
};

export default {
  login,
  create,
};
