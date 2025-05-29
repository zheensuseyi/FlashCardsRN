import { View, Text, SafeAreaView, TextInput, TouchableOpacity, Alert } from 'react-native';
import React, { useState, useContext } from 'react';
import { FlashCardContext } from '@/contexts/FlashCardContext';

const AddCardScreen = () => {
  const [form, setForm] = useState({ title: '', question: '', answer: '' }); 
  const { cardArray, addCard } = useContext(FlashCardContext);

  const handleChange = (field: keyof typeof form, value: string) => {
    setForm(prev => ({ ...prev, [field]: value }));
  };

  const handleAdd = () => {
    const { title, question, answer } = form;
    if (title && question && answer) {
      addCard(title, question, answer);
      setForm({ title: '', question: '', answer: '' });

      Alert.alert('Success', 'Flashcard added successfully!');
    } else {
      Alert.alert('Error', 'Please fill in all fields.');
    }
  };

  const inputFields = [
    { placeholder: 'Enter Title', value: form.title, field: 'title' },
    { placeholder: 'Enter Question', value: form.question, field: 'question' },
    { placeholder: 'Enter Answer', value: form.answer, field: 'answer' },
  ] as const;

  return (
    <SafeAreaView className="flex-1 justify-between bg-blue-500">
      <Text className="text-center font-extrabold text-2xl">Add Flashcard</Text>

      <View className="flex-1 justify-center px-4 space-y-4">
        {inputFields.map(({ placeholder, value, field }) => (
          <TextInput
            key={field}
            placeholder={placeholder}
            value={value}
            onChangeText={(text) => handleChange(field, text)}
            className="mt-auto border-b pb-1 text-center text-2xl placeholder:text-red-950"
          />
        ))}

        <TouchableOpacity
          onPress={handleAdd}
          className="mt-auto bg-white py-4 rounded-xl items-center"
        >
          <Text className="text-lg font-bold">Add Card</Text>
        </TouchableOpacity>

        <Text className="font-bold py-2 text-black text-center mt-4">Total Cards: {cardArray.length}</Text>
      </View>
    </SafeAreaView>
  );
};

export default AddCardScreen;
