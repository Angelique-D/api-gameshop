import { Injectable } from '@nestjs/common';

@Injectable()
export class GameService {
    update(updateGameDto: UpdateGameDto, id: number) {
        throw new Error('Method not implemented.');
    }
    index() {
        throw new Error('Method not implemented.');
    }
}
