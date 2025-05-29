import FlashCard from '@/components/FlashCard';
import { FlashCardContext } from '@/contexts/FlashCardContext';
import { useContext, useEffect, useState, useRef } from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const { cardArray } = useContext(FlashCardContext);
  const [randomCard, setRandomCard] = useState(() => getRandomCard(cardArray));
  const prevIndex = useRef<number | null>(null);

  function getRandomCard(cards: typeof cardArray) {
    if (cards.length === 0) return null;
    if (cards.length === 1) {
      prevIndex.current = 0;
      return cards[0];
    }

    let randomIndex: number;
    do {
      randomIndex = Math.floor(Math.random() * cards.length);
    } while (randomIndex === prevIndex.current);

    prevIndex.current = randomIndex;
    return cards[randomIndex];
  }

  useEffect(() => {
    setRandomCard(getRandomCard(cardArray));
  }, [cardArray]);

  const handleRandomCard = () => {
    setRandomCard(getRandomCard(cardArray));
  };

  return (
    <SafeAreaView className="flex-1 py-4 justify-between bg-blue-500">
      <Text className="text-2xl font-bold text-center">Easy Ace FlashCards</Text>
      <View className="flex-1 justify-between py-80 items-center w-full">
        <FlashCard
          title={randomCard ? randomCard.title : "Please Add A FlashCard"}
          question={randomCard ? randomCard.question : "Go to the add card screen to add a flashcard."}
          answer={randomCard ? randomCard.answer : "Please Add Card"}
        />
      </View>

      <TouchableOpacity
        onPress={randomCard ? handleRandomCard : () => {}}
        className="bg-blue-600 py-3 px-6 rounded-lg mt-4"
      >
        <Text className="text-black font-bold text-center">
          {randomCard ? "Next Random Card" : "Please Add A Card"}
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
