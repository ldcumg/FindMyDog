import "../styles/global.css";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Slot, useRouter } from "expo-router";
import { useEffect } from "react";
import { SafeAreaView } from "react-native";

const RootLayout = () => {
  const router = useRouter();

  useEffect(() => {
    (async function () {
      const hasLaunched = await AsyncStorage.getItem("hasLaunched");

      if (hasLaunched === "true") {
        router.replace("/");
        return;
      }

      await AsyncStorage.setItem("hasLaunched", "true");
      router.replace("/onboarding");
    })();
  }, []);

  return (
    <SafeAreaView className="flex-1">
      <Slot />
    </SafeAreaView>
  );
};

export default RootLayout;
