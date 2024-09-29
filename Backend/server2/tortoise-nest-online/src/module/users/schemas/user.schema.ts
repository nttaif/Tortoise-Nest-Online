import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema( {timestamps: true})
export class User {
  @Prop()
  name: string;
  @Prop()
  age: number;
  @Prop()
  email:string;
  @Prop()
  password:string;
  @Prop()
  firstName:string;
  @Prop()
  lastName:string;
  @Prop()
  phoneNumber:number;
  @Prop()
  image:string;
  @Prop()
  accountType:string;
  @Prop()
  dateOfBirth:string;
  @Prop()
  registerDate:string;
  @Prop()
  biography:string;
  @Prop()
  isActivity:boolean;
  @Prop()
  code_id:string;
  @Prop()
  code_expried:Date;
}

export const UserSchema = SchemaFactory.createForClass(User);