import 'dotenv/config';
import { Ilogin } from '../interfaces/IloginService';
import { decode, encode, TAlgorithm } from 'jwt-simple';
import { LoginRepository } from '../agreggate/Login/LoginRepository';
import { Cipher } from '../helper/Encryption';

const cipher = new Cipher();
const loginRepository = new LoginRepository();
export class LoginServices implements Ilogin {
    public async authenticateUser(userName: string, userPassword: string) {
        userPassword = cipher.createHash(userPassword);
        const result = await loginRepository.authenticateUser(
            userName,
            userPassword,
        );

        let secretKey: string;
        if (process.env.SECRET_JWT_KEY) {
            secretKey = process.env.SECRET_JWT_KEY;
        } else {
            secretKey = 'Unexpected error occurred';
        }

        if (result != null && process.env.SECRET_JWT_KEY) {
            const token = this.createToken(secretKey, result.name, result.id);

            return token;
        } else {
            return 'Authentication failed';
        }
    }
    private createToken(secretKey: string, user: string, userId: string) {
        const algorithm: TAlgorithm = 'HS512';

        const issued = Date.now();

        const sessionTimeLimit = 60 * 60 * 1000;

        const expires = issued + sessionTimeLimit;

        const authenticatedUser = {
            user: user,
            userId: userId,
            expires: expires,
        };

        const issuedToken = encode(authenticatedUser, secretKey, algorithm);

        return issuedToken;
    }

    public JWTDecode(token: string) {
        const algorithm: TAlgorithm = 'HS512';

        try {
            let secretKey: string;
            if (process.env.SECRET_JWT_KEY) {
                secretKey = process.env.SECRET_JWT_KEY;
            } else {
                secretKey = 'Unexpected error occurred';
            }

            const result = decode(token, secretKey, false, algorithm);

            const now = Date.now();

            const tokenStatus = result.expires > now ? 'active' : 'expired';

            if (tokenStatus == 'active') {
                return {
                    session: result,
                    type: 'validToken',
                };
            } else {
                return {
                    session: result,
                    type: 'InvalidToken',
                };
            }
        } catch (_e: unknown) {
            if (_e instanceof Error) {
                throw _e.message;
            }
        }
    }
}
