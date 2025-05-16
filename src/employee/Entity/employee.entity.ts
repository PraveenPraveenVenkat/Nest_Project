import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity({name:'admin'})
export class admin{
   @PrimaryColumn()
  id:number;

  @Column()
  name:string;

  @Column()
  password:string;
}

