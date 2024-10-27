import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EnrollmentService } from './enrollment.service';
import { Enrollment, EnrollmentSchema } from './schemas/enrollment.schema';
import { CoursesModule } from '../courses/courses.module';
import { UsersModule } from '../users/users.module';
import { EnrollmentController } from './enrollment.controller';

@Module({
  imports: [
    UsersModule,
    CoursesModule,
    MongooseModule.forFeature([{name: Enrollment.name, schema: EnrollmentSchema}]), //Đăng ký Enrollment model
  ],
  controllers: [EnrollmentController],
  providers: [EnrollmentService],
  exports: [EnrollmentService],
})
export class EnrollmentModule {}
