export const DEFAULT_EMPTY_SPACE_VALUE = -1;
export const BOARD_DEMENTIONS = 3;

export class GameLogicService {
  private _gameBoard: number[][];
  constructor() {
    this._gameBoard = this.initializeBoard(
      BOARD_DEMENTIONS,
      DEFAULT_EMPTY_SPACE_VALUE
    );    
  }

  public get gameBoard(): number[][] {
    return this._gameBoard;
  }

  private initializeBoard(demention: number, defaultValue: number): number[][] {
    return Array.from({ length: demention }, () =>
      Array.from({ length: demention }, () => defaultValue)
    );
  }
}
