import { ILoginRepository } from 'src/agreggate/Login/ILoginRepository';
import prisma from '../../helper/prismaClient';
import { User } from '@prisma/client';

export class LoginRepository implements ILoginRepository {
    public async authenticateUser(
        userName: string,
        userPassword: string,
    ): Promise<User | null> {
        const userExists = await prisma.user.findFirst({
            where: {
                name: userName,
                password: userPassword,
            },
        });

        return userExists;
    }
}
