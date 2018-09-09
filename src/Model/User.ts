import {Entity, Column, PrimaryColumn, BeforeInsert, BaseEntity} from "typeorm";
import * as uuidv4 from "uuid/v4";

@Entity()
export class User extends BaseEntity{
    @BeforeInsert()
    createId(){
        this.id = uuidv4();
    }
    
    @PrimaryColumn('uuid')
    id: string;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    adress: string;

    @Column()
    city: string;

    @Column()
    zipCode : number;

    @Column()
    countryCode : string;

    @Column("varchar",{length: 255})
    mail : string;

    @Column("text")
    password : string;

    @Column()
    phoneNumber : string;

    @Column()
    language : string;

}
