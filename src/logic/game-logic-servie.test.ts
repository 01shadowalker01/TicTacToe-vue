import {
  BOARD_DEMENTIONS,
  DEFAULT_EMPTY_SPACE_VALUE,
  GameLogicService,
} from "./game-logic-servie";

describe("Game logic servie", () => {
  let logicService: GameLogicService;

  beforeEach(() => {
    logicService = new GameLogicService();
  });
  describe("initial state", () => {
    it("shoud be a n*n array filled with -1 (default vaule)", () => {
      const _gameBoard = (() => {
        return Array.from({ length: BOARD_DEMENTIONS }, () =>
          Array.from(
            { length: BOARD_DEMENTIONS },
            () => DEFAULT_EMPTY_SPACE_VALUE
          )
        );
      })();

      expect(logicService.gameBoard).toEqual(_gameBoard);
    });
  });
});
