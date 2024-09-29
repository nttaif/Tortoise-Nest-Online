import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { access } from 'fs';
import { comparePass } from 'src/helper/util';
import { UsersService } from 'src/module/users/users.service'
import { CreateAuthDto } from './dto/create-auth.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService:JwtService
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findUserByEmail(username);
    if (!user) {
      throw new UnauthorizedException('User not found');
    }
    const isValidPassword=await comparePass(pass,user.password)
    if (!isValidPassword) {
      throw new UnauthorizedException();
    }
    if(!user) return null;
    return user;
  }

  async login(user:any): Promise<any> {
    const payload = { username: user.email, sub: user._id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  handleRegister = async(registerDto:CreateAuthDto) => {
    //check email
    //hash password
    return await this.usersService.handleRegister(registerDto);
  }

  
} 