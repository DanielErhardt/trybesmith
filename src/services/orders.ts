import ordersModel from '../models/orders';
import productsModel from '../models/products';
import { Order } from '../types';
import HttpException from '../utilities/HttpException';

const getAll = async () => {
  const orders = await ordersModel.getAll();
  return orders;
};

const create = async (order: Order): Promise<Order> => {
  const productsExist = await productsModel.productsExist(order.productsIds);
  if (!productsExist) throw new HttpException(404, 'One or more products were not found.');

  const { insertId } = await ordersModel.create(order.userId);

  const insertedOrder: Order = {
    ...order,
    id: insertId,
  };

  await productsModel.updateOrderId(insertedOrder);

  return insertedOrder;
};

export default {
  getAll,
  create,
};
