import { IsMongoId, IsNotEmpty, IsOptional } from "class-validator";

export class CreateLessonDto {
    @IsMongoId()
    @IsNotEmpty()
    _idCourses:string;
    @IsNotEmpty()
    content:string;
    @IsOptional()
    view:number
}
