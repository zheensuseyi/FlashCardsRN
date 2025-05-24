import { SafeAreaView, Text, View } from "react-native";
export default function Index() {
  const num = 1
  return (
    <View className="flex-1 bg-blue-500">
      <SafeAreaView className="flex-1 justify-start">
        <View className="items-center">
          <Text className="font-bold">Flash Cards</Text>
        </View>
      </SafeAreaView>
    </View>
  );
}

