import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";
import SignIn from "./app/screens/SignIn";
import { BuildType, init } from "rn-okto-sdk";
import { OKTO_CLIENT_API_KEY } from "@env";

init(OKTO_CLIENT_API_KEY, BuildType.SANDBOX);

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <SignIn />
    </View>
  );
}
