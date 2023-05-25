import { Utilisateur } from "src/utilisateurs/entities/utilisateur.entity";
import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Secteur {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string
    @OneToMany(() => Utilisateur, (user) => user.secteur)
    users: Utilisateur[]

}
