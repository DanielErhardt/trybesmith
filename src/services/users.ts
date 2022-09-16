import status from 'http-status';
import model from '../models/users';
import { User, UserLogin } from '../types';
import HttpException from '../utilities/HttpException';
import token from '../utilities/token';

const findByLoginInfo = async (loginInfo: UserLogin): Promise<string> => {
  const user = await model.findByLoginInfo(loginInfo);
  if (!user) throw new HttpException(status.UNAUTHORIZED, 'Username or password invalid');
  return token.create({ ...user });
};

const create = async (user: User): Promise<string> => {
  const resultSetHeader = await model.create(user);
  return token.create({
    ...user,
    id: resultSetHeader.insertId,
  });
};

export default {
  findByLoginInfo,
  create,
};
