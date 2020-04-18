import { Deck } from "./types";
import { Color, Mark } from "./enums";

export function createDeck(): Deck {
  const deck: Deck = [];
  const colors = Object.values(Color);
  const marks = Object.values(Mark);

  for (const mark of marks) {
    for (const color of colors) {
      deck.push({
        color: color,
        mark: mark,
      });
    }
  }
  return deck;
}

export function printCard(deck: Deck): void {
  let str = "";
  deck.forEach((card, index) => {
    str += card.color + card.mark + ((index + 1) % 4 === 0 ? "\n" : " ");
  });
  console.log(str);
}
