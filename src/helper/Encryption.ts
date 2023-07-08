import crypto from 'crypto';
import 'dotenv/config';

const ENC = 'bf3c199c2470cb477d907b1e0917c17b';
const IV = '5183666c72eec9e4';
const ALGO = 'aes-256-cbc';

export class Cipher {
    public encrypt(information: string) {
        const cipher = crypto.createCipheriv(ALGO, ENC, IV);
        let encrypted = cipher.update(information, 'utf8', 'base64');
        encrypted += cipher.final('base64');
        return encrypted;
    }

    public decrypt(information: string) {
        const decipher = crypto.createDecipheriv(ALGO, ENC, IV);
        const decrypted = decipher.update(information, 'base64', 'utf8');
        return decrypted + decipher.final('utf8');
    }

    public createHash(information: string) {
        return crypto
            .createHmac('sha256', ENC)
            .update(information)
            .digest('hex');
    }
}
