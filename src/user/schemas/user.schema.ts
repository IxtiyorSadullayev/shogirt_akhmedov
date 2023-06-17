import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


@Schema({timestamps: true})
export class User {

    @Prop({type: String, required: true, trim: true, })
    name: string;

    @Prop({type: String, required: true, trim: true, unique: true, })
    email: string;
    
    @Prop({type: String, required: true, min: 4})
    password: string;

    @Prop({type: String, required: true, unique: true})
    phone: string;
}

export const UserModel = SchemaFactory.createForClass(User);