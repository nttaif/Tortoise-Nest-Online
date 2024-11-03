import { IsMongoId, IsNotEmpty} from "class-validator";

export  enum CourseCategory {
    Technology = 'Technology',
    Economy = 'Economy',
    Education = 'Education',
    // Thêm các category khác nếu cần
}
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
    @IsNotEmpty()
    category:CourseCategory

}
