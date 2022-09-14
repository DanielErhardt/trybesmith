import { Router } from 'express';
import controller from '../controllers/orders';

const router = Router();

router.get('/', controller.getAll);

export default router;