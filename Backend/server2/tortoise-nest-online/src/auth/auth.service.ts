import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { access } from 'fs';
import { comparePass } from 'src/helper/util';
import { UsersService } from 'src/module/users/users.service'

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService:JwtService
  ) {}

  async signIn(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findUserByEmail(username);
    if (!user) {
      throw new UnauthorizedException('User not found');
    }
    const isValidPassword=await comparePass(pass,user.password)
    if (!isValidPassword) {
      throw new UnauthorizedException();
    }
    const payload={sub:user.id,username:user.email};
    return {access_token:await this.jwtService.signAsync(payload)};
  }

  
}