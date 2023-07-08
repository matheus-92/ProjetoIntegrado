import { IUser } from '../interfaces/IUserService';
import { UserRepository } from '../agreggate/Users/UserRepository';
import { Cipher } from '../helper/Encryption';

const cipher = new Cipher();
const userRepository = new UserRepository();

export class userServices implements IUser {
    public async getAll() {
        const result = await userRepository.getAll();

        return result;
    }

    public async add(
        userEmail: string,
        userName: string,
        userPassword: string,
        created_by: string,
    ) {
        userEmail = cipher.encrypt(userEmail);

        userPassword = cipher.createHash(userPassword);

        const result = await userRepository.add(
            userEmail,
            userName,
            userPassword,
            created_by,
        );

        return result;
    }

    public update() {
        return 1;
    }

    public get() {
        return 0;
    }

    public delete() {
        return 1;
    }
}
