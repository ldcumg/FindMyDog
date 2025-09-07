import Onboarding from "./onboarding";
import LogIn from "./log-in";
import { Text, View } from "react-native";

const Index = () => {
  console.log("Index screen rendered");
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Onboarding />
    </View>
  );
};

export default Index;
