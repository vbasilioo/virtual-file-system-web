import { IUser } from "@/interfaces/IUser";

declare module 'next-auth' {
    interface Session {
        user: IUser;
        token: string;
    }

    interface User extends IUser{
        token: string;
    }
}
