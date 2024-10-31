import { Type } from "class-transformer";
import { IsArray, IsMongoId, IsNotEmpty, IsOptional, ValidateNested } from "class-validator";

export class CreateLessonDto {
    @IsMongoId()
    @IsNotEmpty()
    _idCourses:string;
    @IsNotEmpty()
    content:string;
    @IsOptional()
    category:string;
    @IsOptional()
    isPublic:boolean;
    @IsOptional()
    point:number;
    @IsOptional()
    view:number;
}
export  class CreateMultipleLessonsDto {
    @IsNotEmpty()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CreateLessonDto)
    lessons: CreateLessonDto[];
  }
  
