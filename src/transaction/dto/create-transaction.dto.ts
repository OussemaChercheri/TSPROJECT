import { IsArray, IsDateString, IsInt, IsOptional, IsString } from 'class-validator';

export class CreateTransactionDto {

    @IsInt()
    montant: number;

    @IsDateString()
    @IsOptional()
    date: string;

    @IsString()
    categorie: string;

    @IsString()
    @IsOptional()
    description: string;

    @IsArray()
    @IsOptional()
    tags: string[];

    @IsInt()
    userId: number;
}
