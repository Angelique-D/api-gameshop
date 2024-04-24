import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdateGameDto } from './dto/updateGame.dto';
import { CreateGameDto } from './dto/createGame.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class GameService {
    
    constructor(private readonly prismaService: PrismaService) {}

    async getAll() {
        return await this.prismaService.game.findMany()
    }

    getOne(id: number) {
        throw new Error('Method not implemented.');
    }

    async create(createGameDto: CreateGameDto, userId: any) {
        const {  name, typeId, description, image, price, releasedate } = createGameDto;
        await this.prismaService.game.create({ data: {  name, typeId, description, image, price, releasedate, userId  } });
        return { data: 'Game created!' };
    }

    async update(gameId: number, userId: any, updateGameDto: UpdateGameDto) {
         const game = await this.prismaService.game.findUnique({ where: {gameId} });
         if (!game)
         throw new NotFoundException("Game not found");
 
         await this.prismaService.game.update({ 
            where: { gameId },
            data: { ...updateGameDto } 
        });
 
         return { data: "Game updated!" }
    }
    
    async delete(gameId: number, userId: any) {
        const game = await this.prismaService.game.findUnique({ where: {gameId} });
        if (!game) throw new NotFoundException("Game not found");

        await this.prismaService.game.delete({ where: { gameId }});

        return { data: "Game deleted" };
    }
}
