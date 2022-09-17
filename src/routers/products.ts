import { Router } from 'express';
import controller from '../controllers/products';
import validateProduct from '../middlewares/validateProduct';

const router = Router();

router.get('/', controller.getAll);

router.post('/', validateProduct, controller.create);

export default router;