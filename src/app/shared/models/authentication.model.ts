export interface ICreateUser {
    username?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
}

export interface ILoginUser {
    username?: string;
    password?: string;
}