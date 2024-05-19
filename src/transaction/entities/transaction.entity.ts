import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Transaction {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    montant: number;

    @CreateDateColumn()
    date: Date;

    @Column()
    categorie: string;

    @Column({ nullable: true })
    description: string;

    @Column('simple-array', { nullable: true })
    tags: string[];

    @DeleteDateColumn()
    deletedAt: Date;
}
