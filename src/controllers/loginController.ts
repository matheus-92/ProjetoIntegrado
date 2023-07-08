import { Request, Response } from 'express';
import { LoginServices } from '../services/loginServices';

const loginService = new LoginServices();

export class loginController {
    async AuthenticatedUser(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const { userName } = request.body;
        const { userPassword } = request.body;
        const result = await loginService.authenticateUser(
            userName,
            userPassword,
        );
        return response.json(result);
    }
}
