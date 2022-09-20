import { ResultSetHeader, RowDataPacket } from 'mysql2';
import httpStatus from 'http-status';
import connection from './connection';
import { Product, Order } from '../types';
import HttpException from '../utilities/HttpException';

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

const productsExist = async (productsIds: number[]): Promise<boolean> => {
  const [[result]] = await connection.query<RowDataPacket[]>(
    'SELECT COUNT(*) FROM Trybesmith.Products WHERE id IN (?);',
    [productsIds],
  );
  return result['COUNT(*)'] === productsIds.length;
};

const updateOrderId = async (order: Order): Promise<void> => {
  if (!order.id) {
    throw new HttpException(httpStatus.UNPROCESSABLE_ENTITY, 'Order id must be defined.');
  }

  const queries = order.productsIds.map((productId) => connection.execute(
    `UPDATE Trybesmith.Products
    SET orderId = ?
    WHERE id = ?;`,
    [order.id, productId],
  ));

  await Promise.all(queries);
};

export default {
  getAll,
  create,
  productsExist,
  updateOrderId,
};
