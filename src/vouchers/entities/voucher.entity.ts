/* eslint-disable */
// src/users/entity/users.entity.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
 
@Entity("Vouchers") // Declares the class as an entity
export class Voucher {
  @PrimaryGeneratedColumn() // Auto-incremented primary key
  Id: number;
 
  @Column() // Specifies a regular column
  VoucherCode: string;
 
  @Column() // Specifies a regular column
  ValidatedOn: Date;
 
  @Column() // Specifies a regular column
  WorkspaceId: string;
 
  @Column() // Specifies a regular column
  WinningChallengeId: string;
 
  @Column()
  CreatedById : string;

  @Column()
  CreatedOn : Date;

  @Column()
  LastModifiedById : string;

  @Column()
  LastModifiedOn : Date;
  
  @Column()
  SubmissionId : string;

  @Column()
  VoucherPrize : string;

  @Column()
  VoucherPrizeEn : string; 
  
}