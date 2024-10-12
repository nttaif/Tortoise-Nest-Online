import NextAuth, { DefaultSession } from "next-auth";
import { JWT } from "next-auth/jwt"
import { DateTime } from "next-auth/providers/kakao";

interface IUser {
    email: string;
    _id: string;
    name: string;
    access_token:string;
}

declare module "next-auth/jwt" {
    /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
    interface JWT {
        access_token: string;
        refresh_token: string;
        user: IUser;
        access_expire: number;
        error: string;
    }
}

declare module "next-auth" {
    /**
     * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
     */
    interface Session {
        user: IUser,
        access_token: string;
        refresh_token: string;
        access_expire: number;
        error: string;
    }
}


interface User{
    _id?: string;
    name: string;
    email: string;
    password?: string; // Nên xem xét không lưu mật khẩu nếu không cần thiết.
    role?: string;
    dateOfBirth?: DateTime,
    biography?: string,
    phoneNumber?: string,
    image?: string,
    accountType?: string;
    isActivity?: boolean;
    code_id?: string;
    code_expried?: string; // Sử dụng string để lưu trữ ngày, sau đó có thể chuyển đổi thành Date nếu cần.
    createdAt?: string; // Cũng có thể là string, nếu cần sử dụng đối tượng Date thì chuyển đổi sau
    updatedAt?: string; // Cũng có thể là string, nếu cần sử dụng đối tượng Date thì chuyển đổi sau
    __v?: number;
}