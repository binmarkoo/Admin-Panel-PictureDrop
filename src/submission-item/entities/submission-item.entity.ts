/* eslint-disable */
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("SubmissionItems")
export class SubmissionItem {
    @PrimaryGeneratedColumn()
    Id: number;

    @Column()
    SubmissionId: string;

    @Column()
    FileId: string;

    @Column()
    ThumbnailId: string;

    @Column()
    Width: number;

    @Column()
    Height: number;

    @Column()
    ContentType: string;

    @Column()
    ContentLength: number;

    @Column()
    Rating: number;

    @Column()
    Orientation: number;

    @Column()
    CreatedById: string;

    @Column()
    CreatedOn: Date;

    @Column()
    LastModifiedById: string;

    @Column()
    LastModifiedOn: Date;
}
