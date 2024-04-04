import React from "react";
import { View } from "react-native";
import { SafeAreaView, StatusBar } from "react-native";

const Layout = ({ children }) => {
  return (
    <View className="flex-1 items-center justify-center bg-black">
      <StatusBar />
      {children}
    </View>
  );
};

export default Layout;
