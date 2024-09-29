import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import { Model } from 'mongoose';
import { hashPassword } from 'src/helper/util';
import aqp from 'api-query-params';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) 
    private userModel:Model<User>
  
  ){}

  isEmailExist= async(email:string)=>{
    const user= await this.userModel.exists({email})
    if(user!=null) return true;
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
  
  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
