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

  async create(createUserDto: CreateUserDto) {
    const { name, email, password, phoneNumber,biography, image, dateOfBirth, inFoLecturer, role } = createUserDto;
    // Kiểm tra xem email đã tồn tại chưa
    const isExists = await this.isEmailExist(email);
    if (isExists) {
        throw new BadRequestException(`Email exists in database: ${email}. Please enter a new email.`);
    }
    // Mã hóa mật khẩu
    const hashPass = await hashPassword(password);
    // Tạo người dùng với role là 'Lecturer' nếu inFoLecturer có dữ liệu
    const userRole = inFoLecturer ? 'Lecturer' : (role || 'Users');
    const user = await this.userModel.create({
        name,
        email,
        password: hashPass,
        phoneNumber,
        image,
        dateOfBirth,
        inFoLecturer,
        biography,
        role: userRole,
    });
    return {
        _id: user._id,
        role: user.role
    };
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
    return { 
      meta:{
        current:current,
        pageSize:pageSize,
        pages:totalPage,
        total:totalItems,
      },
      results
      };
  }

  async findUserByID(_id: string) {
    return await this.userModel.findOne({_id});
  }
  async findAllByRole(role: string): Promise<User[]> {
    return await this.userModel.find({ role }).exec(); // Giả sử bạn có một trường "role" trong User schema
  }
  async findLecturerById(_id: string): Promise<User> {
    return await this.userModel.findOne({_id });
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
    const { name, email, password } = registerDto;
    //Kiểm tra email tồn tại
    const isExists = await this.isEmailExist(email);
    if (isExists) throw new BadRequestException(`Email đã tồn tại trong hệ thống: ${email}. Vui lòng nhập email khác.`);
    //Biểu thức chính quy để kiểm tra mật khẩu
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{7,}$/;
    if (!passwordRegex.test(password)) {
        throw new BadRequestException('Mật khẩu phải có ít nhất một chữ cái viết hoa, một số, một ký tự đặc biệt và độ dài lớn hơn 6 ký tự.');
    }
    //Hash mật khẩu nếu mật khẩu hợp lệ
    const hashPass = await hashPassword(password);
    const code_id = uuidv4();
    //Tạo người dùng mới với trạng thái chưa kích hoạt
    const user = await this.userModel.create({
      name, email, password: hashPass, isActivity: false, code_id, code_expried: dayjs().add(5, 'minutes')
    });
    //Gửi email kích hoạt tài khoản
    this.mailerService.sendMail({
      to: user.email,
      subject: 'Kích hoạt tài khoản tại Tortoise Nest Online',
      template: "register",
      context: { name: user.name ?? user.email, activationCode: code_id }
    }).catch(() => {});
    return { _id: user._id };
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

  isStudentExist= async(_id:string)=>{
    const user= await this.userModel.exists({_id})
    if(user!=null){
       const isLecturer= await this.findUserByID(_id);
       if(isLecturer.role==='Users')
        return true;
    } ;
    return false;
  }

}