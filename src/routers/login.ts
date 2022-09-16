import { Router } from 'express';
import usersController from '../controllers/users';
import validateLogin from '../middlewares/validateLogin';

const loginRouter = Router();

loginRouter.get('/', validateLogin, usersController.login);

export default loginRouter;