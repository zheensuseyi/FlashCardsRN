import React, { useState, ReactNode } from 'react';
import { FlashCardContext, FlashCard } from './FlashCardContext';

type FlashCardProviderProps = {
  children: ReactNode;
};

export const FlashCardProvider: React.FC<FlashCardProviderProps> = ({ children }) => {
  const [cardArray, setCardArray] = useState<FlashCard[]>([]);

  const addCard = (title: string, question: string, answer: string) => {
    setCardArray(prev => [...prev, { title, question, answer }]);
  };

  return (
    <FlashCardContext.Provider value={{ cardArray, addCard }}>
      {children}
    </FlashCardContext.Provider>
  );
};
