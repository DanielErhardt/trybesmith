import model from '../models/products';
import { Product } from '../types';

const create = async (product: Product): Promise<number> => {
  const resultSetHeader = await model.create(product);
  return resultSetHeader.insertId;
};

export default {
  create,
};
