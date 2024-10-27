import { Module } from '@nestjs/common';
import { LessonService } from './lesson.service';
import { LessonController } from './lesson.controller';
import { CoursesService } from '../courses/courses.service';
import { CoursesModule } from '../courses/courses.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Lesson, LessonSchema } from './schemas/lesson.schema';

@Module({
  imports:[
    CoursesModule,
    MongooseModule.forFeature([{name:Lesson.name,schema:LessonSchema}])
  ],
  controllers: [LessonController],
  providers: [LessonService],
})
export class LessonModule {}
