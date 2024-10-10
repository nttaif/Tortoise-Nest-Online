import { IsNotEmpty, IsOptional } from "class-validator";

export class CreateAuthDto {
    @IsNotEmpty()
    email:string;
    @IsNotEmpty()
    password:string;
    @IsOptional()
    name:string;
}
export class CodeAuthDto{
    @IsNotEmpty()
    _id:string;
    @IsNotEmpty()
    verificationCode:string;
}