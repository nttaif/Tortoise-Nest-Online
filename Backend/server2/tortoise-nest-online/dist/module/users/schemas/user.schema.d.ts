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
export declare const UserSchema: import("mongoose").Schema<User, import("mongoose").Model<User, any, any, any, import("mongoose").Document<unknown, any, User> & User & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, User, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<User>> & import("mongoose").FlatRecord<User> & {
    _id: import("mongoose").Types.ObjectId;
}>;
