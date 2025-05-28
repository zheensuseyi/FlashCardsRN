import { View, Text, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import React, { useState, useContext } from 'react';
import { FlashCardContext } from '@/contexts/FlashCardContext';

const AddCardScreen = () => {
  const [title, setTitle] = useState('');
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const { cardArray, addCard } = useContext(FlashCardContext);

  const handleAdd = () => {
    if (title && question && answer) {
      addCard(title, question, answer);
      setTitle('');
      setQuestion('');
      setAnswer('');
    }
  };

  return (
    <SafeAreaView className="flex-1 justify-between bg-blue-500">
      <Text className="text-center font-extrabold text-2xl">Add Flashcard</Text>
      <View className="flex-1 justify-center px-4 space-y-4">
        <TextInput
          placeholder="Enter Title"
          value={title}
          onChangeText={setTitle}
          className="mt-auto border-b pb-1 text-center text-2xl placeholder:text-red-600"
        />
        <TextInput
          placeholder="Enter Question"
          value={question}
          onChangeText={setQuestion}
          className="mt-auto border-b pb-1 text-center text-2xl placeholder:text-red-600"
        />
        <TextInput
          placeholder="Enter Answer"
          value={answer}
          onChangeText={setAnswer}
          className="mt-auto border-b pb-1 text-center text-2xl placeholder:text-red-600"
        />

        <TouchableOpacity 
        onPress={handleAdd} 
        className="mt-auto bg-white py-4 rounded-xl items-center">
          <Text 
          className="text-lg font-bold">Add Card
          </Text>
        </TouchableOpacity>

        <Text className="py-2 text-black text-center mt-4">Total cards: {cardArray.length}</Text>
      </View>
    </SafeAreaView>
  );
};

export default AddCardScreen;
