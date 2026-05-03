export interface ICreateUser {
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export interface ILoginUser {
    username: string;
    password: string;
}

export interface IUserDetails {
  email: string;
  username: string;
  firstName: string;
  lastName: string;
  referralId?: string;
}