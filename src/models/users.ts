import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { User } from '../types';

const create = async (user: User): Promise<ResultSetHeader> => {
  const [resultSetHeader] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?)',
    [user.username, user.classe, user.level, user.password],
  );
  return resultSetHeader;
};

export default {
  create,
};
