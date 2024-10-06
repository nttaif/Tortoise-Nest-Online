import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './module/users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './auth/passport/jwt-auth.guard';
import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { CoursesModule } from './module/courses/courses.module';
@Module({
imports: [
  ConfigModule.forRoot({
    isGlobal: true,
  }),
  UsersModule,
  AuthModule,
  CoursesModule,
  MongooseModule.forRootAsync({
    imports: [ConfigModule],
    useFactory: async (configService: ConfigService) => ({
      uri: configService.get<string>('MONGODB_URI'),
    }),
    inject: [ConfigService],
  }),
  MailerModule.forRootAsync({
    imports: [ConfigModule],
    useFactory: async (configService:ConfigService) => ({
      transport: {
        host: 'smtp.gmail.com',
        port: 465 ,
        secure:true,
        // ignoreTLS: true,
        // secure: false,
        auth: {          
          user: configService.get<string>('MAILDEV_USER'),
          pass: configService.get<string>('MAILDEV_PASS'),
        },
      },
      defaults: {
        from: '"No Reply" <no-reply@localhost>',
      },
      // preview: true,
      template: {
        dir: process.cwd() + '/src/mail/templates/',
        adapter: new HandlebarsAdapter(), // or new PugAdapter() or new EjsAdapter()
        options: {
          strict: true,
        },
      },
    }),
    inject: [ConfigService],
  }),
],

  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule {}
