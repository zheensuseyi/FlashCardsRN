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

// Default values for context
export const FlashCardContext = createContext<FlashCardContextType>({
  cardArray: [],
  addCard: () => {},
});
