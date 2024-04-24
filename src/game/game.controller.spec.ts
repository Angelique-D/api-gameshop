import { Test, TestingModule } from '@nestjs/testing';
import { GameController } from './game.controller';
import { GameService } from './game.service';
import { GameServiceMock } from './mocks/game.service.mock';
import { gameMock} from './mocks/game.mock';
import { Request } from 'express';

describe('GameController', () => {
  let controller: GameController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GameController],
      providers: [{provide: GameService, useClass: GameServiceMock}]
    }).compile();

    controller = module.get<GameController>(GameController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe("getAll", () => {
    it("Should return an array of games", () => {
      expect(controller.getAll()).resolves.toEqual(gameMock)
    })
  })
  describe("getOne", () => {
    it("Should return a single game", () => {
      const id = 1
      const g = gameMock.find(g => g.gameId === id)
      expect(controller.getOne(1)).resolves.toEqual(g)
    })
  })
  describe("create", () => {
    it('Should return {message: "Game created"}', () => {

      const requestMock: Partial<Request> = {
        user: {
           userId: "1234",
        },
      };

      expect(controller.create(requestMock as Request, gameMock[0])).resolves.toEqual({message: "Game created"})
    })
  })
  describe("update", () => {
    it('Should return {message: "Game updated"}', () => {

      const requestMock: Partial<Request> = {
        user: {
           userId: "1234",
        },
      };

      expect(controller.update(1, gameMock[0], requestMock as Request)).resolves.toEqual({message: "Game updated"})
    })
  })
  describe("delete", () => {
    it('Should return {message: "Game deleted"}', () => {

      const requestMock: Partial<Request> = {
        user: {
           userId: "1234",
        },
      };

      expect(controller.delete(1, requestMock as Request)).resolves.toEqual({message: "Game deleted"})
    })
  })
});
