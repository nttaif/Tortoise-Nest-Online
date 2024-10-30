import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Public } from 'src/decorator/customize';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }
  @Get()
  async findAll(@Query() query, @Query('current') current, @Query('pageSize') pageSize) {
    return this.usersService.findAll(query,+current,+pageSize);
  }

  @Get('id/:id')
  findOne(@Param('id') id: string) {
    return this.usersService.findUserByID(id);
  }
  @Get('/lecturer')
  @Public()
  async findLecturer() {
  return this.usersService.findAllByRole('Lecturer');
}

  @Patch()
  update( @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
}
