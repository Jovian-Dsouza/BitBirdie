import React from "react";
import { View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

function BorderGradient({ children }) {
  return (
    <LinearGradient
      colors={[
        "rgba(133, 255, 196, 0.7)",
        "rgba(92, 198, 255, 0.7)",
        "rgba(188, 133, 255, 0.7)",
      ]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      className="rounded-lg"
    >
      <View className="rounded-lg bg-black m-[1px] justify-center">
        {children}
      </View>
    </LinearGradient>
  );
}

export default BorderGradient;
