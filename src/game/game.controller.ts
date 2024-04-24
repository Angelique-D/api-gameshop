import { Controller, Get, Post, Body, Put, Param, Delete, ParseIntPipe, UseGuards, Req} from '@nestjs/common';
import { CreateGameDto } from './dto/createGame.dto';
import { GameService } from './game.service';
import { UpdateGameDto } from './dto/updateGame.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';

@ApiTags("Games")
@Controller('games')
export class GameController {
    constructor(private readonly gameService: GameService) {}

    @Get()
    getAll() {
        return this.gameService.getAll();
    }

    @Get(":id")
    getOne(@Param("id", ParseIntPipe) id: number) {
        return this.gameService.getOne(id)
    }

    @ApiBearerAuth()
    @UseGuards(AuthGuard("jwt"))
    @Post("create")
    create(@Req() request: Request, @Body() createGameDto: CreateGameDto) {
        const userId = request.user["userId"]
        return this.gameService.create(userId, createGameDto)
    }

    @ApiBearerAuth()
    @UseGuards(AuthGuard("jwt"))
    @Put("update/:id")
    update(
        @Param("id", ParseIntPipe) gameId: number, 
        @Body() updateGameDto: UpdateGameDto, 
        @Req() request: Request
    ) {
        const userId = request.user["userId"];
        return this.gameService.update(gameId, userId, updateGameDto);
    }

    @ApiBearerAuth()
    @UseGuards(AuthGuard("jwt"))
    @Delete("delete/:id")
    delete(
        @Param("id", ParseIntPipe) gameId: number, 
        @Req() request: Request
    ) {
        const userId = request.user["userId"];
        return this.gameService.delete(gameId, userId);
    }
}