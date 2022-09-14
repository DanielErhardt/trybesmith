import { ResultSetHeader, RowDataPacket } from 'mysql2';
import connection from './connection';
import { Product } from '../types';

const getAll = async (): Promise<RowDataPacket[]> => {
  const [rowDataPacket] = await connection
    .execute<RowDataPacket[]>('SELECT * FROM Trybesmith.Products');
  return rowDataPacket;
};

const create = async (product: Product): Promise<ResultSetHeader> => {
  const [result] = await connection.execute<ResultSetHeader>(
    `INSERT INTO
    Trybesmith.Products (name, amount)
    VALUES (?, ?)`,
    [product.name, product.amount],
  );

  return result;
};

export default {
  getAll,
  create,
};
