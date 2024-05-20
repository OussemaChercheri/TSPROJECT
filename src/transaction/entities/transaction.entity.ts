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

    @Column()
    categorie: string;

    @Column({ nullable: true })
    description: string;

    @Column('simple-array', { nullable: true })
    tags: string[];

    @ManyToOne(() => User, (user: User) => user.transactions)
    @JoinColumn({ name: 'userId' })
    user: User;

    @Column()
    userId: number;
}
