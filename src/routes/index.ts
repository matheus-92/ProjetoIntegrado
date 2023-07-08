import { userRoute } from './userRoute';
import { loginRoute } from './loginRoute';

import { Request, Response, Router } from 'express';

export const router = Router();

router.get('/', async (request: Request, response: Response) => {
    /* #swagger.ignore = true */
    response.json({
        dev_version: '1.0',
        prod_version: '1.0',
    });
});

router.use('/user', userRoute);

router.use('/login', loginRoute);
