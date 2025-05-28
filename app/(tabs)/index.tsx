import FlashCard from '@/components/FlashCard';
import { FlashCardContext } from '@/contexts/FlashCardContext';
import { useContext, useEffect, useState } from "react";
import { Image, SafeAreaView, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const { cardArray } = useContext(FlashCardContext);
  const [randomCard, setRandomCard] = useState(() => getRandomCard(cardArray));

  function getRandomCard(cards: typeof cardArray) {
    if (cards.length === 0) return null;
    const randomIndex = Math.floor(Math.random() * cards.length);
    return cards[randomIndex];
  }

  useEffect(() => {
    setRandomCard(getRandomCard(cardArray));
  }, [cardArray]);

  const handleNextCard = () => {
    setRandomCard(getRandomCard(cardArray));
  };

  return (
    <SafeAreaView className="flex-1 py-4 justify-between  bg-blue-500">
      <Text className="text-2xl font-bold text-center">Easy Ace FlashCards</Text>
      <View className="flex-1 justify-between py-4 items-center w-full">
        {randomCard ? (
          <>
            <FlashCard
              title={randomCard.title}
              question={randomCard.question}
              answer={randomCard.answer}>
            </FlashCard>
            <TouchableOpacity
              onPress={handleNextCard}
              className="bg-blue-600 py-3 px-6 rounded-lg mt-4">

              <Text className="text-white font-bold text-center">Next Random Card</Text>

            </TouchableOpacity>
          </>
        )
          : (<FlashCard
            title="Please Add A FlashCard"
            question="Go to the add card screen to add a flashcard."
            answer="GO ADD A CARD BRO"></FlashCard>
          )}
      </View>
    </SafeAreaView >
  );
}

