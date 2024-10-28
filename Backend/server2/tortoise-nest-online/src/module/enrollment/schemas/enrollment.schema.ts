import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type EnrollmentDocument = HydratedDocument<Enrollment>;

@Schema( {timestamps: true})
export class Enrollment {
    @Prop({type:mongoose.Types.ObjectId,ref:"Users"})
    _idUser: string;
    @Prop({type:mongoose.Types.ObjectId,ref:"Courses"})
    _idCourses: string;
    @Prop()
    status:boolean;
    @Prop()
    point:number;
    @Prop()
    progress:number;
}

export const EnrollmentSchema = SchemaFactory.createForClass(Enrollment);