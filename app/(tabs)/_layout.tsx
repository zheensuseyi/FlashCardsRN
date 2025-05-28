import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { FlashCardProvider } from '@/contexts/FlashCardProvider'; // adjust path if needed

const _layout = () => {
    return (
        <FlashCardProvider>
            <Tabs>
                <Tabs.Screen
                    name="index"
                    options={{
                        title: "Home",
                        headerShown: false
                    }}
                />
                <Tabs.Screen
                    name="AddCardScreen"
                    options={{
                        title: "Add Card",
                        headerShown: false
                    }}
                />
            </Tabs>
        </FlashCardProvider>
    )
}

export default _layout