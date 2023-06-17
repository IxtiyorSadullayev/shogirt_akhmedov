import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


@Schema({timestamps: true})
export class Rasm {
    @Prop({type: String, required: true})
    file: string;

    @Prop({type: String, required: true})
    filename: string;
}

export const RasmSchema = SchemaFactory.createForClass(Rasm)
