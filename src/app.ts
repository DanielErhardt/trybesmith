import express from 'express';
import errorHandler from './middlewares/errorHandler';
import productsRouter from './routers/products';

const app = express();

app.use(express.json());

app.use('/products', productsRouter);

app.use(errorHandler);

export default app;
