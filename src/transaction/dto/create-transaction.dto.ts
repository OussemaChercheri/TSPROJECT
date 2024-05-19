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
    description: string;

    @IsArray()
    @IsOptional()
    tags: string[];
}
