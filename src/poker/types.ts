import { Color, Mark } from "./enums";

type JokerType = "black" | "red";

export interface Card {
  getString(): string;
}

export interface NormalCard extends Card {
  color: Color;
  mark: Mark;
}

export interface Joker extends Card {
  type: JokerType;
}

export type LimitLenTuple<T, L extends number> = [T, ...T[]] & { length: L };
