import { Deck } from "./Deck";

const deckGame = new Deck();
deckGame.printCards();
deckGame.dealingCards().forEach((deck: Deck) => deck.printCards());
