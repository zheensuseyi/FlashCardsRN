import React from 'react'
import { Tabs } from 'expo-router'
import { FlashCardProvider } from '@/contexts/FlashCardProvider';

const _layout = () => {
    return (
        <FlashCardProvider>
            <Tabs
                screenOptions={{
                    tabBarStyle: {
                        backgroundColor: '#3B82F6',
                        borderTopWidth: 0,
                    },
                    tabBarActiveTintColor: '#FFFFFF',
                    tabBarInactiveTintColor: '#BFDBFE',
                    tabBarLabelStyle: {
                        fontWeight: '600',
                        fontSize: 12,
                    },
                }}
            >
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