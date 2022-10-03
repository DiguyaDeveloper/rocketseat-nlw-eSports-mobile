import { Game } from "./game.interface";

export interface GameParams extends Omit<Game, "_count"> {}
