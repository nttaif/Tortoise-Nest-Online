import { IsMongoId, IsNotEmpty } from "class-validator";

export class CreateCourseDto {
    @IsNotEmpty()
    name:string;
    @IsNotEmpty()
    image:string;
    @IsNotEmpty()
    description:string;
    @IsNotEmpty()
    @IsMongoId()
    _idLecture:string;

}
