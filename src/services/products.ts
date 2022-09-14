import model from '../models/products';
import { Product } from '../types';

const getAll = async (): Promise<Product[]> => {
  const rowDataPacket = await model.getAll();  
  return rowDataPacket as Product[];
};

const create = async (product: Product): Promise<number> => {
  const resultSetHeader = await model.create(product);
  return resultSetHeader.insertId;
};

export default {
  getAll,
  create,
};
