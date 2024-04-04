import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./app/navigation";
import { BuildType, init } from "rn-okto-sdk";
import { OKTO_CLIENT_API_KEY } from "@env";
import { NativeWindStyleSheet } from "nativewind";

init(OKTO_CLIENT_API_KEY, BuildType.SANDBOX);

NativeWindStyleSheet.setOutput({
  default: "native",
});

export default function App() {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
}