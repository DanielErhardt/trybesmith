import { ResultSetHeader, RowDataPacket } from 'mysql2';
import connection from './connection';
import { User, UserLogin } from '../types';

const findByLoginInfo = async (loginInfo: UserLogin): Promise<User> => {
  const [[user]] = await connection.execute<RowDataPacket[]>(
    'SELECT * FROM Trybesmith.Users AS U WHERE U.username = ? AND U.password = ?',
    [loginInfo.username, loginInfo.password],
  );
  return user as User;
};

const create = async (user: User): Promise<ResultSetHeader> => {
  const [resultSetHeader] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?)',
    [user.username, user.classe, user.level, user.password],
  );
  return resultSetHeader;
};

export default {
  findByLoginInfo,
  create,
};
