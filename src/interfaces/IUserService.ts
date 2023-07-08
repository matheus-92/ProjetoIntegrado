export interface IUser {
    getAll(): object;

    add(
        userEmail: string,
        userName: string,
        userPassword: string,
        created_by: string,
    ): object;

    update(): number;

    get(): number;

    delete(): number;
}
