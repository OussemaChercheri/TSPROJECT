import { Category } from "src/category/entities/category.entity";
import { User } from "src/users/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Budget {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    wallet: number;

    @ManyToOne(() => User, user => user.budget, {
        eager: true,
    })
    @JoinColumn({ name: 'userId'})
    user: User;

    @ManyToOne(() => Category, category => category.budgets, {
        eager: true,
    })
    @JoinColumn({ name: 'categoryId'})
    category: Category
}
