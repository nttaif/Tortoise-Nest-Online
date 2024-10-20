import { IsEmail, IsEmpty, IsNotEmpty, IsOptional } from "class-validator";

export class CreateUserDto {
    @IsNotEmpty()
    name: string;
    @IsOptional()
    age: number;
    @IsEmail()
    email:string;
    @IsNotEmpty()
    password:string;
    @IsOptional()
    phoneNumber:number;
    @IsOptional()
    image:string;
    @IsOptional()
    dateOfBirth:string;
    @IsOptional()
    biography:string;
}
