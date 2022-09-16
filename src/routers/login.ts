import { Router } from 'express';
import rescue from 'express-rescue';
import usersController from '../controllers/users';
import validateLogin from '../middlewares/validateLogin';

const loginRouter = Router();

loginRouter.post('/', validateLogin, rescue(usersController.login));

export default loginRouter;