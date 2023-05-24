import { Utilisateur } from "src/utilisateurs/entities/utilisateur.entity";
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Secteur {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string
    @ManyToMany(() => Utilisateur, (user) => user.secteurs)
    users: Utilisateur[]

}
