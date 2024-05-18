// import * as bcrypt from 'bcrypt';
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

Entity()
export class User {
    @PrimaryGeneratedColumn()
    id : number;

    @Column({ length: 500})
    name: string;

    @Column({ unique: true, nullable: false})
    email: string;

    @Column({ nullable: false})
    password: string;

    @Column({ default: "user"})
    role: string;

    // async hashPassword() {
    //     this.password = await bcrypt.hash(this.password, 10);
    // }

    // async comparePassword(attempt: string): Promise<boolean> {
    //     return await bcrypt.compare(attempt, this.password);
    // }
}
