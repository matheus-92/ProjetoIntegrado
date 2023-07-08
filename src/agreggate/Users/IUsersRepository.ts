import { User } from '@prisma/client';

export interface IUserRepository {
    getAll(): Promise<User[]>;
    add(
        userEmail: string,
        userName: string,
        userPassword: string,
        created_by: string,
    ): Promise<User>;
}
