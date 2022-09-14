import model from '../models/users';
import { User } from '../types';
import token from '../utilities/token';

const create = async (user: User): Promise<string> => {
  const resultSetHeader = await model.create(user);
  return token.create({
    ...user,
    id: resultSetHeader.insertId,
  });
};

export default {
  create,
};
