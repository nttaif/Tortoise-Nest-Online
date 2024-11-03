import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { Public } from 'src/decorator/customize';

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Post()
  create(@Body() createCourseDto: CreateCourseDto) {
    return this.coursesService.create(createCourseDto);
  }

  @Get()
  @Public()
  findAll(@Query() query, @Query('current') current, @Query('pageSize') pageSize) {
    return this.coursesService.findAll(query,current,pageSize);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.coursesService.findCoursesById(id);
  }

  @Patch()
  update(@Body() updateCourseDto: UpdateCourseDto) {
    return this.coursesService.update(updateCourseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.coursesService.remove(id);
  }
}
