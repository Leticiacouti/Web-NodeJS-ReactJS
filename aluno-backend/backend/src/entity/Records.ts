import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from 'typeorm';

@Entity()
export class Records{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
        name: string;
    @Column()
        ra: string;

    @Column()
        dt_birth: Date;
    
    @Column()
        address: string;

    @Column({default: true})
        registered: boolean;

    @Column()
        age: number;
}