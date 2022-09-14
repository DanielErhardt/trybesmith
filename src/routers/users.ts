import { Router } from 'express';
import controller from '../controllers/users';

const router = Router();

router.post('/', controller.create);

export default router;