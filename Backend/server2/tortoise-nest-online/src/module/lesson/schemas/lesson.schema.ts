import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";

export type EnrollmentDocument = HydratedDocument<Lesson>;
@Schema( {timestamps: true})
export class Lesson {
    @Prop({type:mongoose.Types.ObjectId,ref:'Courses'})
    _idCourses:string;
    @Prop()
    category:string;
    @Prop()
    content:string;
    @Prop({default:0})
    view:number;
    @Prop({default:false})
    isPublic:boolean;
    @Prop({default:0})
    point:number;
    
}
export   const LessonSchema= SchemaFactory.createForClass(Lesson)
