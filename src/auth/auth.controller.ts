import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { Public } from 'src/shared/decorators/public.decorators';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }
    @Get('login-google')
    @Public()
    @UseGuards(AuthGuard('google_login'))
    async googleAuth(@Req() req, @Res() res) {
        return this.authService.googleLogin(req, res)
    }

    @Get('profil')
    getProfil(@Req() req) {
        const id = req.user.userId;
        return this.authService.getProfil(+id)


    }
}
