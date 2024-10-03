import { IsEmail, IsEmpty, IsNotEmpty } from "class-validator";

export class CreateUserDto {
    @IsNotEmpty()
    name: string;
    age: number;
    @IsEmail()
    email:string;
    @IsNotEmpty()
    password:string;
    phoneNumber:number;
    image:string;
    dateOfBirth:string;
    biography:string;
}
