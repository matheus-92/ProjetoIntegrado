import { Request, Response } from 'express';
import { userServices } from '../services/userServices';

const userService = new userServices();

export class userController {
    async getAll(request: Request, response: Response): Promise<Response> {
        const result = await userService.getAll();
        return response.status(200).json(result);
    }

    async add(request: Request, response: Response): Promise<Response> {
        const { userEmail, userName, userPassword, create_by } = request.body;

        const result = await userService.add(
            userEmail,
            userName,
            userPassword,
            create_by,
        );

        return response.status(200).json(result);
    }
}
