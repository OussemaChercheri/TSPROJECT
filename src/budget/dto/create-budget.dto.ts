import { IsInt } from "class-validator";

export class CreateBudgetDto {
    @IsInt()
    wallet: number;
}
