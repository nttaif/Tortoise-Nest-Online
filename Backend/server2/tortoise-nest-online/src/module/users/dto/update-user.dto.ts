import { Type } from "class-transformer";
import { IsEmail, IsMongoId, IsNotEmpty, IsOptional, ValidateNested } from "class-validator";
import { LecturerInfoDto } from "./create-user.dto";

export class UpdateUserDto{
    @IsMongoId({message:'_id invalid'})
    @IsNotEmpty({message:'_id is not empty'})
    _id:string;
    @IsOptional()
    name: string;
    @IsOptional()
    age: number;
    @IsEmail()
    @IsOptional()
    email:string;
    @IsOptional()
    password:string;
    @IsOptional()
    phoneNumber:number;
    @IsOptional()
    image:string;
    @IsOptional()
    dateOfBirth:string;
    @IsOptional()
    biography:string;
    @IsOptional()
    role: string; 
    @IsOptional()
    @ValidateNested()
    @Type(() => LecturerInfoDto)
    inFoLecturer: LecturerInfoDto;
}
