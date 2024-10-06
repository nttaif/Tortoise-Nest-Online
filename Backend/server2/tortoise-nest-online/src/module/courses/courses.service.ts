import { InjectModel } from '@nestjs/mongoose';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { Course } from './schemas/course.schema';
import mongoose, { Model } from 'mongoose';
import { BadRequestException, Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import aqp from 'api-query-params';

@Injectable()
export class CoursesService {
  constructor(
    @InjectModel(Course.name) private courseModel:Model<Course>,
    private userService:UsersService
  ){}
  
  async create(createCourseDto: CreateCourseDto) {
    const isLecturer= await this.userService.isLecturerExist(createCourseDto._idLecture)
    if(!isLecturer){
      throw new BadRequestException('Dont find Lecturer')
    }
    const course= await this.courseModel.create(createCourseDto);
    return {course_id: course._id}
  }

  async findAll(query: string, current: number, pageSize: number) {
    const { filter, sort } = aqp(query);
    //bỏ các tham số không cần thiết
    if (filter.current) delete filter.current;
    if (filter.pageSize) delete filter.pageSize;
    // Gán giá trị mặc định nếu current hoặc pageSize không được truyền
    if (!current) current = 1;
    if (!pageSize) pageSize = 10;
    // Đếm tổng số lượng bản ghi
    const totalItems = await this.courseModel.countDocuments(filter);
    // Tính toán tổng số trang
    const totalPage = Math.ceil(totalItems / pageSize);
    // Tính số bản ghi cần bỏ qua
    const skip = (current - 1) * pageSize;
    // Lấy các kết quả theo trang và sắp xếp
    const result = await this.courseModel
    .find(filter)
    .limit(pageSize)
    .skip(skip)
    .sort(sort as any);
    return {result,totalPage};
  }

  async findCoursesById(_id: string) {
    return await this.courseModel.findOne({_id});
  }

  async update(updateCourseDto: UpdateCourseDto) {
    const { _id, ...updateData } = updateCourseDto;  // Tách riêng _id
    return await this.courseModel.updateOne({_id:_id},{$set:updateData});
  }

  async remove(_id: string) {
    //check id
    if(mongoose.isValidObjectId(_id)){
      //delete
      return  this.courseModel.deleteOne({_id})
    }else{
      throw new BadRequestException('Id không đúng định dạng mongoDB')
    }
    return mongoose;
  }
}
