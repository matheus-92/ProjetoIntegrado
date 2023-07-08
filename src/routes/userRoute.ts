import { Router, Request, Response } from 'express';
import { userController } from '../controllers/userController';
import { requireJwtMiddleware } from '../middleware/authenticationMiddleware';
const userControl = new userController();
export const userRoute = Router();

userRoute.use(requireJwtMiddleware);

userRoute.get('/', userControl.getAll);

userRoute.post('/', userControl.add);

userRoute.put('/');

userRoute.delete('/');
