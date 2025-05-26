import { SafeAreaView, Text, View, Image } from "react-native";
import FlashCard from '@/components/FlashCard'
const allCards = []
export default function Index() {
  const num = 1
  /*to do
    have the flashcard in the middle with all of the functionality, 
    when user touches card, it flips over 
    arrows on the sides to change questions

  */
  return (
    <SafeAreaView className="flex-1 justify-start bg-blue-500">
      <Text className="text-2xl font-bold text-center">Easy Ace FlashCards</Text>
      <View className="flex-row justify-end">
        <Text>Randomize</Text>
        <Image
          source={require('../../assets/images/favicon.png')}
        />
      </View>
      <View className="flex-1 justify-end p-12">
        <Text className="text-center text-2xl font-bold">Card Number 8/14</Text>
      </View>
    </SafeAreaView>
  );
}

