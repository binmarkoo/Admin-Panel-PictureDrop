/* eslint-disable */
// src/users/entity/users.entity.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity("Users") // Declares the class as an entity
export class User {
  @PrimaryGeneratedColumn() // Auto-incremented primary key
  Id: string;

  @Column() // Specifies a regular column
  Username: string;

  @Column()
  FirstName: string;

  @Column()
  Lastname:string;

  @Column()
  Email: string;

  @Column()
  StripeCustomerId: string;

}
