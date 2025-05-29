import { View, Text, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';

interface Props {
  title: string;
  question: string;
  answer: string;
}

const FlashCard = ({ title, question, answer }: Props) => {
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    setShowAnswer(false);
  }, [title, question, answer]);

  return (
    <View className="flex-1 w-full px-4">
      <TouchableOpacity
        className="bg-blue-300 items-center rounded-none border border-spacing-1"
        onPress={() => setShowAnswer(!showAnswer)}
      >
        <Text className="font-bold">{title} {'\n'}</Text>
        <Text className="font-medium">{showAnswer ? answer : question}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FlashCard;
