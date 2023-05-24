import { Repa } from "src/repas/entities/repa.entity";
import { Secteur } from "src/secteurs/entities/secteur.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Utilisateur {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    username: string
    @Column()
    email: string
    @OneToMany(() => Repa, (repas) => repas.user)
    repas: Repa[]
    @ManyToOne(() => Secteur, (secteur) => secteur.users)
    secteurs: Secteur[]
}
