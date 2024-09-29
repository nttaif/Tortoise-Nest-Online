import { HydratedDocument } from 'mongoose';
export type UserDocument = HydratedDocument<User>;
export declare class User {
    name: string;
    age: number;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    phoneNumber: number;
    image: string;
    accountType: string;
    dateOfBirth: string;
    registerDate: string;
    biography: string;
    isActivity: boolean;
    code_id: string;
    code_expried: Date;
}
export declare const UserSchema: any;
