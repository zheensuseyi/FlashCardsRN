import { createContext } from 'react';

export type FlashCard = {
  title: string;
  question: string;
  answer: string;
};

type FlashCardContextType = {
  cardArray: FlashCard[];
  addCard: (title: string, question: string, answer: string) => void;
};

export const FlashCardContext = createContext<FlashCardContextType>({
  cardArray: [],
  addCard: () => {},
});
