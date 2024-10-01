import { IUser } from "@/interfaces/IUser";

declare module 'next-auth/jwt' {
    interface JWT {
        user: IUser;
        token: string;
    }
}
