import { ArrayNotEmpty, ArrayUnique, IsArray, IsDate, IsNotEmpty, IsNumber } from "class-validator";

export class UpdateGameDto {
    @IsNotEmpty()
    readonly name: string;

    @IsArray()
    @ArrayNotEmpty()
    @ArrayUnique()
    readonly typeId: number[];

    @IsNotEmpty()
    readonly description: string;

    @IsNotEmpty()
    readonly image: string;

    @IsNotEmpty()
    @IsNumber()
    readonly price: number;

    @IsNotEmpty()
    @IsDate()
    readonly releasedate: Date;
}