import { PartialType } from '@nestjs/mapped-types';
import { CreateCourseDto } from './create-course.dto';
import { IsMongoId, IsOptional } from 'class-validator';

export class UpdateCourseDto{
    @IsMongoId()
    @IsOptional()
    _id:string;
    @IsOptional()
    name:string;
    @IsOptional()
    image:string;
    @IsOptional()
    description:string;
    @IsOptional()
    totalStudent:string;
    @IsOptional()
    _idLecture:string;
}
