import { IsMongoId, IsNotEmpty, IsOptional } from "class-validator";

export class UpdateUserDto{
    @IsMongoId({message:'_id invalid'})
    @IsNotEmpty({message:'_id is not empty'})
    _id:string;
    @IsOptional()
    name: string;
    @IsOptional()
    age: number;
    @IsOptional()
    role:string;
    @IsOptional()
    phoneNumber:number;
    @IsOptional()
    image:string;
    @IsOptional()
    dateOfBirth:string;
    @IsOptional()
    biography:string;
}
