import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument, HydrateOptions } from "mongoose";
import { CourseCategory } from "../dto/create-course.dto";
export type CourseDocument = HydratedDocument<Course>;
@Schema({timestamps:true})
export class Course{
    @Prop()
    name:string;
    @Prop()
    image:string;
    @Prop()
    description:string;
    @Prop({default:0})
    totalStudent:number;
    @Prop({type:mongoose.Types.ObjectId,ref:"Users"})
    _idLecture:string;
    @Prop({ required: true, enum: CourseCategory })  // Đảm bảo enum trong schema
    category: CourseCategory;
    @Prop({default:0})
    rating:number;
}

export const CourseSchema = SchemaFactory.createForClass(Course)