import { Controller, Get, Query, Post, Body, Put, Param, Delete} from '@nestjs/common';
import { CreateGameDto } from './dto/create-game.dto';

@Controller('games')
export class GamesController {
    @Post()
    create(@Body() createGameDto: CreateGameDto) {
        'New game is create succesfully';
    }

    // @Get()
    // findAll(@Query() query: ListAllEntities) {
    //     return `This action returns all games (limit: ${query.limit} items)`;
    // }

    @Put(':id')
    findOne(@Param('id') id: string) {
        return `this action returns a #${id} game`;
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return `This action removes a #${id} game`;
    }
}