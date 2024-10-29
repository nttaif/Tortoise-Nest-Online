import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateLessonDto } from './dto/create-lesson.dto';
import { UpdateLessonDto } from './dto/update-lesson.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Lesson } from './schemas/lesson.schema';
import { CoursesService } from '../courses/courses.service';
import { Model } from 'mongoose';

@Injectable()
export class LessonService {
  constructor(
    @InjectModel(Lesson.name)
    private lessonModel: Model<Lesson>,
    private coursesService: CoursesService
  ){}
  async create(createLessonDto: CreateLessonDto) {
    //bắt validation 
    const isCourses= await this.coursesService.isCoursesExist(createLessonDto._idCourses)
    if(!isCourses){
      throw new BadRequestException('Không tìm thấy khoá học!')
    }
    const res = await this.lessonModel.create(createLessonDto)
    return {lessonID: res._id};
  }
  async createMultiple(lessons:CreateLessonDto[]) {
    //bắt validation 
    return await this.lessonModel.insertMany(lessons);
  }


  findAll() {
    return `This action returns all lesson`;
  }

  findOne(id: number) {
    return `This action returns a #${id} lesson`;
  }

  update(id: number, updateLessonDto: UpdateLessonDto) {
    return `This action updates a #${id} lesson`;
  }

  remove(id: number) {
    return `This action removes a #${id} lesson`;
  }
}
