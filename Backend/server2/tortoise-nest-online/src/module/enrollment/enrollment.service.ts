import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateEnrollmentDto } from './dto/create-enrollment.dto';
import { UpdateEnrollmentDto } from './dto/update-enrollment.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Enrollment } from './schemas/enrollment.schema';
import mongoose, { Model } from 'mongoose';
import { UsersService } from '../users/users.service';
import { CoursesService } from '../courses/courses.service';

@Injectable()
export class EnrollmentService {
  constructor(
    @InjectModel(Enrollment.name) 
    private enrollmentModel:Model<Enrollment>,
    private userService:UsersService,
    private coursesService:CoursesService
  ){}

  async create(createEnrollmentDto: CreateEnrollmentDto) {
    const isStudent= await this.userService.isStudentExist(createEnrollmentDto._idUser)
    const isCourses= await this.coursesService.isCoursesExist(createEnrollmentDto._idCourses)
    if(!isStudent){
      throw new BadRequestException('Không tìm thấy học sinh!')
    }
    if(!isCourses){
      throw new BadRequestException('Không tìm thấy khoá học!')
    }
    const enrollment = await this.enrollmentModel.create(createEnrollmentDto)
    return {enrollment_id: enrollment._id};
  }

  async findAll() {
    return await this.enrollmentModel.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} enrollment`;
  }

  async update(updateEnrollmentDto: UpdateEnrollmentDto) {
    const { _idUser,_idCourses, ...updateData } = updateEnrollmentDto;  //Tách riêng _id
    const result = await this.enrollmentModel.updateOne(
      { _idUser: _idUser,_idCourses:_idCourses },
      { $set: updateData }
    );
    if (result.matchedCount === 0) {
      throw new NotFoundException(`Enrollment with IDStudent ${_idUser} and IDCourses ${_idCourses}  not found`);
    }
    return { message: 'Enrollment updated successfully' };
  }

  remove(id: number) {
    return `This action removes a #${id} enrollment`;
  }
}
