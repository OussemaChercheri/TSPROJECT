import { Budget } from "src/budget/entities/budget.entity";
import { Transaction } from "src/transaction/entities/transaction.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Category {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(() => Transaction, transaction => transaction.category)
    transactions: Transaction[];

    @OneToMany(() => Budget, budget => budget.category)
    budgets: Budget[];
}
