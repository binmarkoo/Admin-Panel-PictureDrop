/* eslint-disable */
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity("Workspaces")
export class Workspace 
{
  @PrimaryGeneratedColumn()
  Id:number;
  @Column()
  Name:string;
  @Column()
  NameEn:string;
  @Column()
  Description:string;
  @Column()
  DescriptionEn:string;
  @Column()
  ContactUrl:string;
  @Column()
  ContactMail:string;
  @Column()
  ContactPhone:string;
  @Column()
  FirstName:string;
  @Column()
  LastName:string;
  @Column()
  DateOfBirth:string;
  @Column()
  AddressLine1:string;
  @Column()
  AddressLine2:string;
  @Column()
  PostalCode: number;
  @Column()
  City: string;
  @Column()
  CountryId:string;
  @Column()
  CompanyName:string;
  @Column()
  CompanyVat:string;
  @Column()
  CompanyDataProtectionUrl:string;
  @Column()
  UploadLimit:string;
  @Column()
  StripeSubscriptionId:string;
  @Column()
  StripSessionId:string;
  @Column()
  SubscriptionStatus:string;
  @Column()
  SubscriptionEndDate:string;
  @Column()
  TrialStartOn:string;
  @Column()
  TrialEndsOn:string;
  @Column()
  OwnerId:string;
  @Column()
  FileId:string;
  @Column()
  DefaultPrizeId:number;
  @Column()
  HasPassword: boolean;
  @Column()
  Password:string;
  @Column()
  Slug:string;
  @Column()
  CreatedById:string;
  @Column()
  CreatedOn:string;
  @Column()
  LastModifiedById:string;
  @Column()
  LastModifiedOn:string;

}
