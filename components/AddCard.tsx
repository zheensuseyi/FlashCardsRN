/*import { View, Text } from 'react-native'
import React, { useState } from 'react'

const AddCard = () => {
    const [cardArr, setCardArr] = useState([])
    const addCardToArray = (title: string, question: string, answer: string) => {
        const fCard = {
            id: Date.now().toString(),
            title,
            question,
            answer
        };
        setCardArr(prev => [...prev, fCard]);

        // Clear inputs after adding
        setTitle('');
        setQuestion('');
        setAnswer('');
    };
}

// user adds a card in addCard screen
// that card gets added to cardArray
// User can now go to home screen, which will have a random card displayed
export default AddCard*/