export interface Ilogin {
    authenticateUser(userName: string, userPassword: string): Promise<string>;
}
