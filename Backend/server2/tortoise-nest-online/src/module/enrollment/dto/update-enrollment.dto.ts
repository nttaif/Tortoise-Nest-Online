import { IsMongoId, IsNotEmpty, IsOptional } from "class-validator";

export class UpdateEnrollmentDto {
    @IsMongoId()
    @IsOptional()
    _id:string;
    @IsOptional()
    @IsMongoId()
    _idUser: string;
    @IsOptional()
    @IsMongoId()
    _idCourses: string;
    @IsOptional()
    status:boolean;
    @IsOptional()
    point:number;
    @IsOptional() 
    progress:number;
}
