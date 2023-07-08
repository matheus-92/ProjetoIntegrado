import { User } from '@prisma/client';

export interface ILoginRepository {
    authenticateUser(
        userName: string,
        userPassword: string,
    ): Promise<User | null>;
}
