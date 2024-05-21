import { IsInt } from "class-validator";

export class CreateBudgetDto {
    @IsInt()
    wallet: number;

    @IsInt()
    userId: number;

    @IsInt()
    categoryId: number;
}
