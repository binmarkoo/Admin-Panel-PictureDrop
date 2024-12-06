/* eslint-disable */

export class CreateSubmissionItemDto {
    Id: number;
    SubmissionId: string;
    FileId: string;
    ThumbnailId: string;
    Width: number;
    Height: number;
    ContentType: string;
    ContentLength: number;
    Rating: number;
    Orientation: number;
    CreatedById: string;
    CreatedOn: Date;
    LastModifiedById: string;
    LastModifiedOn: Date;
}
