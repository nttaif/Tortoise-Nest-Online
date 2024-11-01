import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema( {timestamps: true})
export class User {
  @Prop({ required: true })
  name: string;
  @Prop()
  age: number;
  @Prop({ required: true, unique: true })
  email:string;
  @Prop({ required: true })
  password:string;
  @Prop()
  phoneNumber:number;
  @Prop()
  image:string;
  @Prop({default:'Users'})
  role:string;
  @Prop({default:'Local'})
  accountType:string;
  @Prop()
  dateOfBirth:string;
  @Prop()
  registerDate:string;
  @Prop()
  biography:string;
  @Prop({default:false})
  isActivity:boolean;
  @Prop()
  code_id:string;
  @Prop()
  code_expried:Date;
  @Prop({
    type: {
      hireDate: { type: String },
      academic: { type: String },
      specialization: { type: String },
      rating: { type: Number, default: 0 },
    },
    _id: false,
  })
  inFoLecturer?: {
    hireDate: string;
    academic: string;
    specialization: string;
    rating: number;
  };
}

export const UserSchema = SchemaFactory.createForClass(User);