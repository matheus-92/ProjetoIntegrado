import { Router, Request, Response } from 'express';
import { loginController } from '../controllers/loginController';

const loginControl = new loginController();
export const loginRoute = Router();

loginRoute.get('/');

loginRoute.post('/', loginControl.AuthenticatedUser);

loginRoute.put('/');

loginRoute.delete('/');
