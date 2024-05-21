import { Category } from 'src/category/entities/category.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../../users/entities/user.entity';

@Entity()
export class Transaction {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    montant: number;

    @Column()
    date: Date;

    @ManyToOne(() => Category, category => category.transactions, {
        eager: true,
    })
    @JoinColumn({ name: 'categoryId'})
    category: Category;

    @Column({ nullable: true })
    description: string;

    @Column('simple-array', { nullable: true })
    tags: string[];

    @ManyToOne(() => User, user => user.transactions, {
        eager: true,
    })
    @JoinColumn({ name: 'userId' })
    user: User;

}
