import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { Product } from '../types';

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
  create,
};
