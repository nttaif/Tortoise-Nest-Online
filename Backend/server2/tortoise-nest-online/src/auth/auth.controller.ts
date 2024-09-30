import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './passport/local-auth.guard';
import { Public } from 'src/decorator/customize';
import { CreateAuthDto } from './dto/create-auth.dto';
import { MailerService } from '@nestjs-modules/mailer';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly mailerService: MailerService

  ) {}

  // create(@Body() createAuthDto: CreateAuthDto) {
  //   return this.authService.signIn(createAuthDto.username,createAuthDto.password);
  // }
  @Public()
  @UseGuards(LocalAuthGuard)
  @Post('login')
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
  @Get('sendEmail') 
  sendEmail() {
    this.mailerService
    .sendMail({
      to: 'ngothanh.tai204@gmail.com', // list of receivers
      subject: 'Testing Nest MailerModule ✔', // Subject line
      text: 'welcome', // plaintext body
      template: "register",
      context:{
        name:"Tai",
        activationCode:"23123123123123123123"
      }
    })
    .then(() => {})
    .catch(() => {});
    return "ok";
  }

 
}
