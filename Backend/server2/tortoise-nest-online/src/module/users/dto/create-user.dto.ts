import { Type } from "class-transformer";
import { IsEmail, IsEmpty, IsInt, IsNotEmpty, IsNumber, IsOptional, IsString, Max, Min, ValidateNested } from "class-validator";
export class LecturerInfoDto {
    @IsOptional()
    @IsString()
    hireDate: string;

    @IsOptional()
    @IsString()
    academic: string;

    @IsOptional()
    @IsString()
    specialization: string;

    @IsOptional()
    @IsNumber({}, { message: "Rating must be a number" })
    @Min(0)
    @Max(5)
    rating: number;
}
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
    @IsOptional()
    role: string; 
    @IsOptional()
    @ValidateNested()
    @Type(() => LecturerInfoDto)
    inFoLecturer: LecturerInfoDto;
}
