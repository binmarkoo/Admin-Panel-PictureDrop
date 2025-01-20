/* eslint-disable */
import { Column, Entity, JoinTable, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity("SubmissionItems")
export class SubmissionItem {
    @PrimaryGeneratedColumn()
    Id: number;

    @Column()
    SubmissionId: string;

    @Column()
    Rating: number;

    @Column()
    Orientation: number;

    @Column()
    CreatedOn: Date;

    @Column()
    LastModifiedOn: Date;

    
}
