export type Product = {
  id?: number;
  name: string;
  amount: string;
  orderId?: number;
};

export type Order = {
  id: number;
  userId: number;
  productsIds: number[];
};

export type UserLogin = {
  username: string;
  password: string;
};

export type User = UserLogin & {
  id?:number;
  classe: string;
  level: number;
};