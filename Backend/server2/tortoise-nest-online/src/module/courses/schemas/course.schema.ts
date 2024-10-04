import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument, HydrateOptions } from "mongoose";
import { User } from "src/module/users/schemas/user.schema";

export type CourseDocument = HydratedDocument<Course>;
@Schema({timestamps:true})
export class Course{
    @Prop()
    name:string;
    @Prop()
    image:string;
    @Prop()
    description:string;
    @Prop({type:mongoose.Types.ObjectId,ref:"Owner"})
    _idLecture:User;
}

export const CourseSchema =SchemaFactory.createForClass(Course)