import express from 'express';
import errorHandler from './middlewares/errorHandler';
import productsRouter from './routers/products';
import usersRouter from './routers/users';

const app = express();

app.use(express.json());

app.use('/products', productsRouter);

app.use('/users', usersRouter);

app.use(errorHandler);

export default app;
