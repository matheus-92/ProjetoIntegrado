import { PrismaClient, User } from '@prisma/client';
import { IUserRepository } from 'src/agreggate/Users/IUsersRepository';

const prisma = new PrismaClient();

export class UserRepository implements IUserRepository {
    public async getAll(): Promise<User[]> {
        const allUsers = prisma.user.findMany();

        return allUsers;
    }

    public async add(
        userEmail: string,
        userName: string,
        userPassword: string,
        created_by: string,
    ): Promise<User> {
        const addedUser = prisma.user.create({
            data: {
                email: userEmail,
                name: userName,
                password: userPassword,
                isAdmin: false,
                created_by: created_by,
            },
        });

        return addedUser;
    }
}
