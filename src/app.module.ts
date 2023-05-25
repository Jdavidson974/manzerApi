import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UtilisateursModule } from './utilisateurs/utilisateurs.module';
import { RepasModule } from './repas/repas.module';
import { SecteursModule } from './secteurs/secteurs.module';
import { Utilisateur } from './utilisateurs/entities/utilisateur.entity';
import { Secteur } from './secteurs/entities/secteur.entity';
import { Repa } from './repas/entities/repa.entity';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './auth/guards/jwt-auth/jwt-auth.guard';


@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), TypeOrmModule.forRoot({
    type: "mysql",
    host: process.env.DB_HOST_PROD,
    port: +process.env.DB_PORT,
    username: process.env.DB_USERNAME_PROD,
    password: process.env.DB_PASSWORD_PROD,
    database: process.env.DB_NAME_PROD,
    synchronize: true,
    entities: [Utilisateur, Secteur, Repa]
  }), UtilisateursModule, RepasModule, SecteursModule, AuthModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ]
})
export class AppModule { }
