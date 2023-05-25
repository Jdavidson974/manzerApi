import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }
    @Get('login-google')
    @UseGuards(AuthGuard('google_login'))
    async googleAuth(@Req() req, @Res() res) {
        return this.authService.googleLogin(req, res)
    }
}
