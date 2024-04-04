import React from "react";
import { View, Text, Image } from "react-native";
import Layout from "../../layout";
import { AppIcons, AppImgs } from "../../assets/AppImgs";

function HomeScreen() {
  return (
    <Layout>
      <View className="flex-1 w-full px-5 py-10 space-y-5 justify-center items-center">
        <Text className="text-2xl text-white font-bold">Home Screen</Text>
      </View>
    </Layout>
  );
}

export default HomeScreen;
