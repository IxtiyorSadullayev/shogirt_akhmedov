import { ApiProperty } from "@nestjs/swagger";

export class CreateFoodDto {
    @ApiProperty({type: String, title: 'foodname'})
    foodname: string;
    
    @ApiProperty({type: String, title: 'Ovqatni puli'})
    count: string;

    @ApiProperty({type: String, title: 'foodname'})
    price: string;

    @ApiProperty({type: String, title: "weight food "})
    weightfood: string;

    @ApiProperty({type: String, title: "Img food", description: "Rasmlarni google docs dan olamiz."})
    photo: string;    
}
