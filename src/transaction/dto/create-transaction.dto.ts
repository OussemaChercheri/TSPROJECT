import { IsArray, IsDateString, IsInt, IsOptional, IsString } from 'class-validator';

export class CreateTransactionDto {
    @IsInt()
    userId: number;

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
}
