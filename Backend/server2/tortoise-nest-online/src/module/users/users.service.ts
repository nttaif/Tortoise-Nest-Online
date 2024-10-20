import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import mongoose, { Model } from 'mongoose';
import { hashPassword } from 'src/helper/util';
import aqp from 'api-query-params';
import { CodeAuthDto, CreateAuthDto } from 'src/auth/dto/create-auth.dto';
import {v4 as uuidv4} from 'uuid';
import { MailerService } from '@nestjs-modules/mailer';
import dayjs from 'dayjs';
@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) 
    private userModel:Model<User>,
    private readonly mailerService: MailerService
  ){}

  isEmailExist= async(email:string)=>{
    const user= await this.userModel.exists({email})
    if(user!=null) return true;
    return false;
  }
  isLecturerExist= async(_id:string)=>{
    const user= await this.userModel.exists({_id})
    if(user!=null){
       const isLecturer= await this.findUserByID(_id);
       if(isLecturer.role==='Lecturer')
        return true;
    } ;
    return false;
  }
  async create(createUserDto: CreateUserDto) {
    const{name,email,password,phoneNumber,image,dateOfBirth}=createUserDto;
    const isExists= await this.isEmailExist(email);
    if(isExists===true){
      throw new BadRequestException(`Email exits in database: ${email}.please enter new email`)
    }
    //hash password
    const hashPass =await hashPassword(password)
    const user=await this.userModel.create({
      name,email,password:hashPass,phoneNumber,image,dateOfBirth
    })
    return{
      _id:user._id
    }
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
    const totalItems = await this.userModel.countDocuments(filter);
    // Tính toán tổng số trang
    const totalPage = Math.ceil(totalItems / pageSize);
    // Tính số bản ghi cần bỏ qua
    const skip = (current - 1) * pageSize;
    // Lấy các kết quả theo trang và sắp xếp
    const results = await this.userModel
      .find(filter)
      .limit(pageSize)
      .skip(skip)
      .sort(sort as any);

    // Trả về kết quả và tổng số trang
    return { results, totalPage };
  }

  async findUserByID(_id: string) {
    return await this.userModel.findOne({_id});
  }

  async findUserByEmail(email:string){
    return await this.userModel.findOne({email});
  }

  async update(updateUserDto: UpdateUserDto) {
    return await this.userModel.updateOne(
      {_id:updateUserDto._id},{...updateUserDto}
    );
  }

  async remove(_id: string) {
    //check id
    if(mongoose.isValidObjectId(_id)){
      //delete
      return  this.userModel.deleteOne({_id})
    }else{
      throw new BadRequestException('Id không đúng định dạng mongoDB')
    }
    return mongoose;
  }

  async handleRegister(registerDto:CreateAuthDto){
    const{name,email,password}=registerDto;
    const isExists= await this.isEmailExist(email);
    if(isExists===true){
      throw new BadRequestException(`Email exits in database: ${email}.please enter new email`)
    }
    //hash password
    const hashPass =await hashPassword(password);
    const code_id= uuidv4();
    const user=await this.userModel.create({
      name,email,password:hashPass,
      isActivity:false,
      code_id: code_id,
      code_expried:dayjs().add(5,'minutes')
    })
    //send email
    this.mailerService
    .sendMail({
      to:  user.email, // list of receivers
      subject: 'Activity your account at Tortoise Nest Online', // Subject line
      text: 'welcome', // plaintext body
      template: "register",
      context:{
        name:user.name??user.email,
        activationCode:code_id
      }
    })
    .then(() => {})
    .catch(() => {});
    return {
      _id:user._id
    }
  }
  async handleActivity(data:CodeAuthDto){
    const user = await this.userModel.findOne({
      _id:data._id,
      code_id:data.verificationCode
    })
    if(!user){
      throw new BadRequestException('Mã code không hợp lệ hoặc đã hết hạn')
    }
    //check expired
    const checkIsBefore =dayjs().isBefore(user.code_expried);
    if(checkIsBefore){
      await  this.userModel.updateOne({_id:data._id},{isActivity:true})
    }else{
      throw new BadRequestException('Mã code của bạn đã hết hạn')
    }

    return{checkIsBefore}; 
  }
  async reActivity(email:string){
    const user = await this.userModel.findOne({email})
    if(!user){
      throw new BadRequestException('Không tìm thấy nguời dùng trong hệ thống: ',email)
    }
    if(user.isActivity){
      throw new BadRequestException('Tài khoản đã được kích hoạt')
    }
    //send emai
    const code_id= uuidv4();
    //update user
    await user.updateOne({
      code_id:code_id,
      code_expried:dayjs().add(5,'minutes')
    })
    this.mailerService
    .sendMail({
      to:  user.email, // list of receivers
      subject: 'Activity your account at Tortoise Nest Online', // Subject line
      text: 'welcome', // plaintext body
      template: "register",
      context:{
        name:user.name??user.email,
        activationCode:code_id
      }
    })
    .then(() => {})
    .catch(() => {});
    return {
      _id:user._id
    }
  }

}