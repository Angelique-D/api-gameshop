import { gameMock } from "./game.mock"

export class GameServiceMock {
    getAll = jest.fn().mockResolvedValue(gameMock);
    getOne = jest.fn().mockImplementation((id : number) => {
        return Promise.resolve(gameMock.find(g => g.gameId === id))
    });
    create = jest.fn().mockResolvedValue({message: "Game created"});
    update = jest.fn().mockResolvedValue({message: "Game updated"});
    delete = jest.fn().mockResolvedValue({message: "Game deleted"});
}