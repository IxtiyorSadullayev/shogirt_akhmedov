import { ApiProperty } from "@nestjs/swagger";

export class CreateRasmlarDto {
    @ApiProperty({type: String, format: "binary", title: "Rasm manzili "})
    file: any;

    @ApiProperty({type: String, title: "Rasmni nomi ?"})
    filename: string;
}
