import { View, Text, TouchableOpacity } from 'react-native'
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
        <View>
            <TouchableOpacity
                onPress={() => setShowAnswer(!showAnswer)}
                className="text-center">
                <Text>{title} {showAnswer ? answer : question} </Text>
            </TouchableOpacity>
        </View>
    );
}

export default FlashCard