import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config'
import { GamesController } from './games.controller';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { MailerModule } from './mailer/mailer.module';
import { PostModule } from './post/post.module';
import { CommentModule } from './comment/comment.module';
import { GameController } from './game/game.controller';
import { GameModule } from './game/game.module';

@Module({
  imports: [ConfigModule.forRoot({isGlobal : true}), AuthModule, PrismaModule, MailerModule, PostModule, CommentModule, GameModule],
  controllers: [GamesController, GameController],
  providers: [],
})
export class AppModule {}
