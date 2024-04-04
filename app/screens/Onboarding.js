import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Layout from "../layout";
import { AppImgs } from "../images/AppImgs";
import { SparklesIcon } from "react-native-heroicons/solid";
import { ChevronRightIcon } from "react-native-heroicons/solid";

function Onboarding() {
  function handleContinue() {}
  return (
    <Layout>
      <View className="flex-1 w-full px-5 py-10 space-y-5">
        <View className="flex flex-row justify-start items-center space-x-2">
          <Image
            source={AppImgs.logo}
            accessibilityLabel="logo"
            className="w-10 h-10 rounded-full"
          />
          <Text className="text-white text-2xl font-semibold">BitBirdie</Text>
        </View>

        <View className="flex-1 justify-between items-center text-white p-5 py-14 rounded-2xl bg-gray-900">
          <Image
            source={AppImgs.logo}
            accessibilityLabel="logo"
            className="w-72 h-72 rounded-xl"
          />

          <View className="flex-1 justify-end items-center space-y-4">
            <Text className="text-2xl font-bold text-white">
              Seamless Crypto Management with BitBirdie
            </Text>
            <Text className="text-[#FAFAFC]">
              Unlock automated portfolio management, personalized transaction
              recommendations, and one-click staking with BitBirdie.
            </Text>
          </View>
        </View>

        <TouchableOpacity
          onPress={handleContinue}
          className="bg-[#191A1E] rounded-full p-5 px-10  border-2 border-[#AEAEAE]"
        >
          <View className="flex flex-row justify-between items-center">
            <View className="flex flex-row space-x-3 items-center">
              <View className="bg-white rounded-full p-2">
                <ChevronRightIcon fill="#0F172A" size={22} />
              </View>

              <Text className="text-white text-lg text-center font-bold">
                Get Started
              </Text>
            </View>

            <View className="flex flex-row space-x-1 items-center">
              <ChevronRightIcon fill="#D9D9D9" size={18} />
              <ChevronRightIcon fill="#e8e8e8" size={20} />
              <ChevronRightIcon fill="white" size={22} />
            </View>
          </View>
        </TouchableOpacity>
        {/* <Text className="text-white">Onboarding</Text> */}
      </View>
    </Layout>
  );
}

export default Onboarding;
