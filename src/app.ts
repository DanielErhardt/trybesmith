import express from 'express';
import errorHandler from './middlewares/errorHandler';
import productsRouter from './routers/products';
import usersRouter from './routers/users';
import ordersRouter from './routers/orders';
import loginRouter from './routers/login';

const app = express();

app.use(express.json());

app.use('/login', loginRouter);

app.use('/products', productsRouter);

app.use('/users', usersRouter);

app.use('/orders', ordersRouter);

app.use(errorHandler);

export default app;
