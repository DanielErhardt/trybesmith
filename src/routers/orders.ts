import { Router } from 'express';
import rescue from 'express-rescue';
import controller from '../controllers/orders';
import validateOrder from '../middlewares/validateOrder';

const router = Router();

router.get('/', controller.getAll);

router.post('/', validateOrder, rescue(controller.create));

export default router;