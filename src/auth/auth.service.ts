import { Injectable, Res } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Utilisateur } from 'src/utilisateurs/entities/utilisateur.entity';
import { UtilisateursService } from 'src/utilisateurs/utilisateurs.service';

@Injectable()
export class AuthService {

    constructor(
        private usersService: UtilisateursService,
        private jwtService: JwtService,
    ) { }

    async validateUser(email: string,): Promise<any> {
        const user = await this.usersService.findOneByEmail(email);
        if (user) {
            return user;
        }
        return null;
    }

    googleLogin(req, @Res() res) {
        const email: string = req.user.email;

        if (!req.user) {
            // le compte n'existe pas chez google , redirection sur la page inscription.
            return res.redirect(`http://localhost:4200`);
        } else {
            return this.usersService.findOneByEmail(email).then(
                user => {
                    if (user) {
                        // generer token + rediriger vers angular
                        this.login(user, res)
                    } else {

                        // user nexiste pas , rediriger vers la page d'inscription avec l'email fournis le nom et prenom 
                        return res.redirect(`http://localhost:4200/register?&email=${req.user.email}&nom=${req.user.lastName}&prenom=${req.user.firstName}&photo=${req.user.picture}`);
                    }
                }
            )
        }
    }
    async login(user: Utilisateur, @Res() res) {
        const payload = { email: user.email, sub: user.id, picture: user.picture };
        const token = this.jwtService.sign(payload);
        return res.redirect(`http://localhost:4200?token=${token}`);
    }

    getProfil(id: number) {
        return this.usersService.getProfil(id);
    }
}
