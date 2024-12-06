/* eslint-disable */

export class CreateSubmissionItemDto {
    Id: number;
    SubmissionId: string;
    FileId: string;
    ThumbnailId: string;
    width: number;
    height: number;
    ContentType: string;
    ContentLength: number;
    Rating: number;
    Orientation: number;
    CreatedById: string;
    CreatedOn: Date;
    LastModifiedById: string;
    LastModifiedOn: Date;
}
