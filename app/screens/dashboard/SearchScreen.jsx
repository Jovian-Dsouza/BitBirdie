import React from "react";
import { View, Text } from "react-native";
import Layout from "../../layout";

function SearchScreen() {
  return (
    <Layout>
      <View className="flex-1 w-full px-5 py-10 space-y-5 justify-center items-center">
        <Text className="text-2xl text-white font-bold">Search Screen</Text>
      </View>
    </Layout>
  );
}

export default SearchScreen;
