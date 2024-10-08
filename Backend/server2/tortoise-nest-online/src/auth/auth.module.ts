import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UsersModule } from 'src/module/users/users.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './passport/local.strategy';
import { JwtStrategy } from './passport/jwt.strategy';

@Module({
  imports:[
    PassportModule,
    UsersModule,
    JwtModule.registerAsync({
      useFactory: async (configService:ConfigService)=>({
        global:true,
        secret:configService.get<string>('JWT_SECRET'),
        signOptions:{
          expiresIn:configService.get<string>('JWT_ACCESS_TOKEN_EXPRIED'),
        }
      }),
      inject:[ConfigService],
    })
  ],
  controllers: [
    AuthController,
  ],
  providers: [AuthService,LocalStrategy,JwtStrategy],
})
export class AuthModule {}
