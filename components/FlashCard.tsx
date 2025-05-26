import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native'
import React, { useState } from 'react'

/* FIXME: This function will return a flashcard that will be used
in the app */
interface Props {
    title: string;
    question: string;
    answer: string;
}
const FlashCard = ({ title, question, answer }: Props) => {
    const [showAnswer, setShowAnswer] = useState(false)
    return (
        <View className = "flex-1 w-full px-4">
            <TouchableOpacity
                className=" bg-blue-300 items-center rounded-none border border-spacing-1"
                onPress={() => setShowAnswer(!showAnswer)}
            >
                <Text className="font-bold"> {title} {'\n'}</Text>
                <Text className ="font-medium">{showAnswer ? answer : question}</Text>
            </TouchableOpacity>
        </View>    
    );
}

export default FlashCard