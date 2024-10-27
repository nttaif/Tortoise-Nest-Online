import { IsMongoId, IsNotEmpty } from "class-validator";

export class CreateEnrollmentDto {
    @IsNotEmpty()
    @IsMongoId()
    _idUser: string;
    @IsNotEmpty()
    @IsMongoId()
    _idCourses: string;
    @IsNotEmpty()
    status:boolean;
    @IsNotEmpty()
    point:number;
    @IsNotEmpty()
    progress:number;
}
