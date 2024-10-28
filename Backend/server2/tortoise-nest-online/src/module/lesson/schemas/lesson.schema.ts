import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";

export type EnrollmentDocument = HydratedDocument<Lesson>;
@Schema( {timestamps: true})
export class Lesson {
    @Prop({type:mongoose.Types.ObjectId,ref:'Courses'})
    _idCourses:string;
    @Prop()
    lessonName:string;
    @Prop()
    content:string;
    @Prop()
    view:number;
}
export   const LessonSchema= SchemaFactory.createForClass(Lesson)
