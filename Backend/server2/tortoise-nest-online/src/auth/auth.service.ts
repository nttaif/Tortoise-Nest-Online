import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { comparePass } from 'src/helper/util';
import { UsersService } from 'src/module/users/users.service'
import { CreateAuthDto } from './dto/create-auth.dto';
@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService:JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findUserByEmail(username);
    if (!user) {
      throw new UnauthorizedException('User not found');
    }
    if(!user) return null;
    const isCompar =await comparePass(pass,user.password)
    if(!isCompar) return null;
    return user;
  }

  async login(user:any): Promise<any> {
    const payload = { username: user.email, sub: user._id };
    return {
      user:{
        email:user.email,
        _id:user._id,
        name:user.name
      },
      access_token: this.jwtService.sign(payload),
    };
  }

  handleRegister = async(registerDto:CreateAuthDto) => {
    //check email
    //hash password
    return await this.usersService.handleRegister(registerDto);
  }
} 