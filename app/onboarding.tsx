import { ImageBackground, Text, View } from "react-native";

const Onboarding = () => {
  return (
    <ImageBackground
      source={require("../assets/images/onboading-background.jpg")}
      resizeMode="stretch"
      className="w-full flex-1"
    >
      <View className="mx-auto mt-[136px] h-[123px] w-[343px] items-center justify-center rounded-[36] bg-[#F9FAFB] opacity-40">
        <View className="py-21">
          <Text className="text-[22px] text-[#7F7F7F]">산책 중독</Text>
          <Text className="text-[59px] text-primary">오댕댕</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Onboarding;
