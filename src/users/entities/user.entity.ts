import { Budget } from 'src/budget/entities/budget.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Transaction } from '../../transaction/entities/transaction.entity';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column({ default: 'user', name: 'role' })
    role: string;

    @OneToMany(() => Transaction, transaction => transaction.user)
    transactions: Transaction[];

    @OneToMany(() => Budget, budget => budget.user)
    budget: Budget[];
}
