import NextAuth, { DefaultSession } from "next-auth";
import { JWT } from "next-auth/jwt"
import { DateTime } from "next-auth/providers/kakao";

interface IUser {
    email: string;
    _id: string;
    name: string;
    role:string;
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

interface UploadUrlData{
        url: string;
        signature: string;
        api_key: string;
        timestamp: number;
}
interface LecturerInfo {
    hireDate: string;
    academic: string;
    specialization: string;
    rating: number;
  }
interface User{
    _id?: string;
    name: string;
    email: string;
    password?: string;
    role?: string;
    dateOfBirth?: DateTime,
    biography?: string,
    phoneNumber?: string,
    image?: File | string,
    age?:number,
    inFoLecturer?:LecturerInfo,
    accountType?: string;
    isActivity?: boolean;
    code_id?: string;
    code_expried?: string;
    createdAt?: string;
    updatedAt?: string; 
    __v?: number;
}

interface Courses{
    _id?: string;
    name?:string;
    image?: File | string;
    description?:string;
    category?:string;
    _idLecture?:string;
    totalStudent?:number;
    rating?:number;
    createdAt?: string;
    updatedAt?: string;
    __v?: number;
}

interface Lesson{
    _id?: string;
    _idCourses?:string;
    content?:string;
    category?:string;
    view?:number;
    isPublic?:boolean
    point?:number;
    createdAt?: string; 
    updatedAt?: string; 
    __v?: number;
}