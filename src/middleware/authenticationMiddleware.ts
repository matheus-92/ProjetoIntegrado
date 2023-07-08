import { Request, Response, NextFunction } from 'express';
import { LoginServices } from '../services/loginServices';

const loginServices = new LoginServices();

export function requireJwtMiddleware(
    request: Request,
    response: Response,
    next: NextFunction,
) {
    const unauthorized = (message: string) =>
        response.status(401).json({
            ok: false,
            status: 401,
            message: message,
        });

    const requestHeader = 'X-JWT-Token';
    const header = request.header(requestHeader);

    if (!header) {
        unauthorized(`Required ${requestHeader} header not found.`);
        return;
    }

    const decodedSession = loginServices.JWTDecode(header);

    if (decodedSession?.type == 'InvalidToken') {
        unauthorized(`Session time expired`);
        return;
    }

    next();
}
