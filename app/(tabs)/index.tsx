import { SafeAreaView, Text, View, Image } from "react-native";
import FlashCard from '@/components/FlashCard'
const allCards = []
/* 
TO DO FOR INDEX.TSX: IMPLEMENT A WAY FOR INDEX.TSX TO SHOW A RANDOM CARD FROM THE FLASHCARDS ARRAY, 
AND A WAY TO TRACK HOW MANY CARDS ARE IN THE ARRAY. 
ALSO ADD SOME BUTTONS THAT LET YOU GO BACK AND FORTH ON THE FLASHCARDS AND MAKE RAMDONIZE BUTTON WORK 
*/
export default function Index() {
  const num = 1
  return (
    <SafeAreaView className="flex-1 justify-start bg-blue-500">
      <Text className="text-2xl font-bold text-center">Easy Ace FlashCards</Text>
      <View className="flex-col items-end p-4">
        {/* add a button that shuffles the deck here */}
        <Image
          source={require('../../assets/images/question-mark.png')}
          className="w-14 h-14 rounded-lg"
        />
        <Text className="font-bold text-red-600">RANDOMIZE</Text>
      </View>
      <FlashCard
        title="meow"
        question="yo"
        answer="What the fuck did you just fucking say about me, you little bitch? Ill have you know I graduated top of my class in the Navy Seals, and Ive been involved in numerous secret raids on Al-Quaeda, and I have over 300 confirmed kills. I am trained in gorilla warfare and Im the top sniper in the entire US armed forces. You are nothing to me but just another target. I will wipe you the fuck out with precision the likes of which has never been seen before on this Earth, mark my fucking words. You think you can get away with saying that shit to me over the Internet? Think again, fucker. As we speak I am contacting my secret network of spies across the USA and your IP is being traced right now so you better prepare for the storm, maggot. The storm that wipes out the pathetic little thing you call your life. Youre fucking dead, kid. I can be anywhere, anytime, and I can kill you in over seven hundred ways, and thats just with my bare hands. Not only am I extensively trained in unarmed combat, but I have access to the entire arsenal of the United States Marine Corps and I will use it to its full extent to wipe your miserable ass off the face of the continent, you little shit. If only you could have known what unholy retribution your little clever comment was about to bring down upon you, maybe you would have held your fucking tongue. But you couldnt, you didn't, and now youre paying the price, you goddamn idiot. I will shit fury all over you and you will drown in it. You're fucking dead, kiddo."
      ></FlashCard>
      <View className="justify-end p-12">
        <Text className="text-center text-2xl font-bold">Card Number 8/14</Text>
      </View>
    </SafeAreaView>
  );
}

