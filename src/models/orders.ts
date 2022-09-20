import { ResultSetHeader, RowDataPacket } from 'mysql2';
import connection from './connection';
import { Order } from '../types';

const getAll = async (): Promise<Order[]> => {
  const [result] = await connection.execute<RowDataPacket[]>(`
    SELECT O.id, O.userId, P.id AS productId
    FROM Trybesmith.Orders AS O
    INNER JOIN Trybesmith.Products AS P ON O.id = P.orderId;
  `);

  const reduced: Order[] = result.reduce((acc: Order[], cur, _idx, arr) => {
    if (!acc.find((order) => order.id === cur.id)) {
      acc.push({
        id: cur.id,
        userId: cur.userId,
        productsIds: arr
          .filter((order) => order.id === cur.id)
          .map((order) => order.productId),
      });
    }
    return acc;
  }, []);

  return reduced;
};

const create = async (userId: number): Promise<ResultSetHeader> => {
  const [result] = await connection.execute<ResultSetHeader>(
    `INSERT INTO Trybesmith.Orders
    SET userId = (SELECT id FROM Trybesmith.Users WHERE id = ?);`,
    [userId],
  );
  
  return result;
};

export default {
  getAll,
  create,
};
