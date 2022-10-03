import { GameParams } from "../shared/interfaces/game-params.interface";

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      game: GameParams;
    }
  }
}
