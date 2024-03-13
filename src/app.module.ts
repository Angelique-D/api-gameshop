import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config'
import { GamesController } from './games.controller';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { MailerModule } from './mailer/mailer.module';
import { PostModule } from './post/post.module';

@Module({
  imports: [ConfigModule.forRoot({isGlobal : true}), AuthModule, PrismaModule, MailerModule, PostModule],
  controllers: [AppController, GamesController],
  providers: [AppService],
})
export class AppModule {}
