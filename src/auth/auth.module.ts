import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { GoogleStrategy } from './strategy/google.strategy';
import { UtilisateursService } from 'src/utilisateurs/utilisateurs.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Utilisateur } from 'src/utilisateurs/entities/utilisateur.entity';
import { Repa } from 'src/repas/entities/repa.entity';
import { Secteur } from 'src/secteurs/entities/secteur.entity';
import { JwtStrategy } from './strategy/jwt.strategy';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [TypeOrmModule.forFeature([Utilisateur, Repa, Secteur]), JwtModule.registerAsync({
    imports: [ConfigModule],
    useFactory: async (configService: ConfigService) => {
      return {
        secret: configService.get<string>('JWT'),
        signOptions: { expiresIn: '1d' },
      };
    },
    inject: [ConfigService],
  })],
  controllers: [AuthController],
  providers: [AuthService, GoogleStrategy, UtilisateursService, JwtStrategy]
})
export class AuthModule { }
