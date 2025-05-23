/* eslint-disable */
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity("Workspaces")
export class Workspace 
{
  @PrimaryGeneratedColumn()
  Id:string;
  @Column()
  Name:string;
  @Column()
  Description:string
  @Column()
  CompanyName:string;
  @Column()
  SubscriptionStatus:string
  @Column()
  Slug:string;
}
