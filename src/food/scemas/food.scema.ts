import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


@Schema({timestamps: true})
export class Food {

    @Prop({type: String, required: true,})
    foodname: string;
    
    @Prop({type: String, required: true,})
    count: string;

    @Prop({type: String, required: true,})
    price: string;

    @Prop({type: String, required: true,})
    weightfood: string;

    @Prop({type: String, required: true,})
    photo: string;  
}

export const FoodSchema = SchemaFactory.createForClass(Food)