import { View, Text, SafeAreaView, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
/*
TO DO FOR ADDCARD.TSX: ADD A BUTTON THAT CAN SUCCESSFULLY ADD A CARD TO AN ARRAY. 
*/
const addCard = () => {
  const [title, setTitle] = useState('')
  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('')
  return (
    <SafeAreaView className="flex-1 bg-blue-500">
      <Text className="text-center font-extrabold text-2xl">Add Flashcard</Text>
      <View className="flex-1 justify-center px-4 space-y-4">
        <View>
          <TextInput
            placeholder="Enter Title"
            value={title}
            onChangeText={setTitle}
            className="mb-20 border-b pb-1 text-center text-2xl placeholder:text-red-600"
          />
          <TextInput
            placeholder="Enter Question"
            value={question}
            onChangeText={setQuestion}
            className="mb-20 border-b pb-1 text-center text-2xl placeholder:text-red-600"

          />
          <TextInput
            placeholder="Enter Answer"
            value={answer}
            onChangeText={setAnswer}
            className="border-b pb-1 text-center text-2xl placeholder:text-red-600"
          />
          { /*<TouchableOpacity onPress={() => createNewCard(title, question, answer) } >

</TouchableOpacity>*/ }
        </View>
      </View>
    </SafeAreaView>
  )
}

export default addCard

function uuid() {
  throw new Error('Function not implemented.');
}
