import React from "react";
import { Text, View } from "react-native";

function Message({ children, className = "" }) {
  return (
    <View className="flex flex-row justify-between w-full bg-[#1B1C21] rounded-lg">
      <Text className={`text-white px-3 py-2 ${className}`}>
        {children}
      </Text>
    </View>
  );
}

export default Message;
