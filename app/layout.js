import React from "react";
import { View } from "react-native";
import { SafeAreaView, StatusBar } from "react-native";

const Layout = ({ children }) => {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-black">
      <StatusBar backgroundColor="black"/>
      {children}
    </SafeAreaView>
  );
};

export default Layout;
