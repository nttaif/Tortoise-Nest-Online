import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './passport/local-auth.guard';
import { Public, ResponseMessage } from 'src/decorator/customize';
import { CodeAuthDto, CreateAuthDto } from './dto/create-auth.dto';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,

  ) {}
  @Public()
  @UseGuards(LocalAuthGuard)
  @Post('login')
  @ResponseMessage("Fetch Login")
  handleLogin(@Request() req) {
    return this.authService.login(req.user);
  }
  // @UseGuards(JwtAuthGuard)
  @Public()
  @Post('register')
  register(@Body() registerDto:CreateAuthDto) {
    return this.authService.handleRegister(registerDto);
  }
  @Public()
  @Post('verify')
  verify(@Body() codeAuthDto:CodeAuthDto) {
    return this.authService.handleActivity(codeAuthDto);
  }

  @Public()
  @Post('re-verify')
  reVerify(@Body("email") email:string) {
    return this.authService.reVerify(email);
  }
}
