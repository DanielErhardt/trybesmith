import { Router } from 'express';
import controller from '../controllers/users';
import validateUser from '../middlewares/validateUser';

const router = Router();

router.post('/', validateUser, controller.create);

export default router;