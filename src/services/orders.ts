import model from '../models/orders';

const getAll = async () => {
  const orders = await model.getAll();
  return orders;
};

export default {
  getAll,
};
