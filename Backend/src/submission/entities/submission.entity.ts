import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("Submissions")
export class Submission {
    @PrimaryGeneratedColumn()
    Id: string;
    @Column()
    WorkspaceId:string
}
