export interface IUser {
    id: string;
    username: string;
    password: string;
    role: string;
    enabled: boolean;
    authorities: Array<{ authority: string }>;
    createdAt: string;
    updatedAt: string;
}


export interface IUserLogin {
    success: boolean;
    data: {
        user: IUser;
        token: string;
    };
    message: string;
}
