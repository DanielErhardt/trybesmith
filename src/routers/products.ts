import { Router } from 'express';
import controller from '../controllers/products';

const router = Router();

router.post('/', controller.create);

export default router;