import { Controller, Get, Query, Post, Body, Put, Param, Delete, ParseIntPipe} from '@nestjs/common';
import { CreateGameDto } from './dto/create-game.dto';
import { GameService } from './game.service';

@Controller('games')
export class GameController {
    constructor(private readonly gameService: GameService) {}

    @Get()
    index() {
        return this.gameService.index()
    }

    @Get(":id")
    show(@Param("id", ParseIntPipe) id: number) {
        return this.gameService.show(id)
    }

    @Post()
    create(@Body() createGameDto: CreateGameDto) {
        'New game is create succesfully';
    }

    @Put(":id")
    update(@Body() updateGameDto: UpdateGameDto, @Param("id", ParseIntPipe) id: number) {
        return this.gameService.update(updateGameDto, id);
    }

    @Delete(":id")
    remove(@Param('id') id: string) {
        return `This action removes a #${id} game`;
    }
}