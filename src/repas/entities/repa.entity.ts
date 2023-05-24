import { Utilisateur } from "src/utilisateurs/entities/utilisateur.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Repa {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string
    @ManyToOne(() => Utilisateur, (user) => user.repas)
    user: Utilisateur
}
