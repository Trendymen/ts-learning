import { Card, Joker, LimitLenTuple, NormalCard } from "./types";
import { Color, Mark } from "./enums";

export class Deck {
  readonly #cards: Card[] = [];
  constructor(cards?: Card[]) {
    if (cards) {
      this.#cards = cards;
    } else {
      this.init();
    }
  }

  private init(): void {
    const colors = Object.values(Color);
    const marks = Object.values(Mark);

    for (const mark of marks) {
      for (const color of colors) {
        this.#cards.push({
          color: color,
          mark: mark,
          getString(): string {
            return this.color + this.mark;
          },
        } as NormalCard);
      }
    }

    let joker: Joker = {
      type: "black",
      getString(): string {
        return "JOKER";
      },
    };
    this.#cards.push(joker);
    joker = {
      type: "red",
      getString: joker.getString,
    };
    this.#cards.push(joker);
    this.shuffle();
  }

  private shuffle(): void {
    const len = this.#cards.length;
    this.#cards.forEach((card, index) => {
      const random = Deck.getRandomInt(0, len);
      [this.#cards[index], this.#cards[random]] = [
        this.#cards[random],
        this.#cards[index],
      ];
    });
  }

  /**
   * 取不到最大值
   * @param min
   * @param max
   * @return {number}
   */
  private static getRandomInt(min, max): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //不含最大值，含最小值
  }

  printCards(): void {
    let str = "";
    this.#cards.forEach((card, index) => {
      str += card.getString() + ((index + 1) % 6 === 0 ? "\n" : " ");
    });
    console.log(str + "\n");
  }

  dealingCards(): LimitLenTuple<Deck, 4> {
    return [
      this.dispatchCards(17),
      this.dispatchCards(17),
      this.dispatchCards(17),
      new Deck(this.#cards),
    ];
  }

  private dispatchCards(num: number): Deck {
    const cards: Card[] = [];
    for (let i = 0; i < num; i++) {
      cards.push(this.#cards.shift() as Card);
    }
    return new Deck(cards);
  }
}
