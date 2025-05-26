import { View, Text, SafeAreaView, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const addCard = () => {
  const [title, setTitle] = useState('')
  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('')
  const createNewCard = (title: string, question: string, answer: string) => {
    const flashCard = {
      title: title,
      question: question,
      answer: answer,
    }
    return flashCard;
  }
  return (
    <SafeAreaView className="flex-1 justify-start bg-blue-500">
      <TextInput
        placeholder="Enter Title"
        value={title}
        onChangeText={setTitle}
        className="text-center"
      />
      <TextInput
        placeholder="Enter Question"
        value={question}
        onChangeText={setQuestion}
      />
      <TextInput
        placeholder="Enter Answer"
        value={answer}
        onChangeText={setAnswer}
      />
      <TouchableOpacity onPress={() => createNewCard(title, question, answer) } >

      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default addCard

function uuid() {
  throw new Error('Function not implemented.');
}
