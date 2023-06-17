import { ApiProperty } from "@nestjs/swagger";

export class CreateAuthDto {
    @ApiProperty({type: String, required: true, title: "Foydalanuvchi emaili"})
    email: string;

    @ApiProperty({type: String, required: true, title: "Foydalanuvchi paroli"})
    password: string;
}