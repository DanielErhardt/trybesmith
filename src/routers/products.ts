import { Router } from 'express';
import controller from '../controllers/products';

const router = Router();

router.get('/', controller.getAll);

router.post('/', controller.create);

export default router;