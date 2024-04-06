import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Layout from "../layout";
import { AppImgs } from "../assets/AppImgs";
import { ChevronRightIcon } from "react-native-heroicons/solid";
import CustomButton from "../components/CustomButton";

function Onboarding() {
  function handleContinue() {}
  return (
    <Layout>
      <View className="flex-1 w-full px-5 py-5 space-y-5">
        <View className="flex flex-row justify-start items-center space-x-2">
          <Image
            source={AppImgs.logo}
            accessibilityLabel="logo"
            className="w-10 h-10 rounded-full"
          />
          <Text className="text-white text-2xl font-semibold">BitBirdie</Text>
        </View>

        <View className="flex-1 items-center text-white p-5 py-10 rounded-2xl bg-gray-900 mb-6 space-y-8">
          <Image
            source={AppImgs.logo}
            accessibilityLabel="logo"
            className="w-72 h-72 rounded-xl"
          />

          <View className="flex-1 items-center space-y-4">
            <Text className="text-2xl font-bold text-white">
              🤖 AI-Powered Web3 Magic, Just a Tap Away! ✨
            </Text>
            <Text className="text-sm text-center text-[#FAFAFC]">
              Your all-in-one Web3 companion. Unleash the AI magic with Swapping
              🔄, Limit Orders 🎯, DCA 💹, Portfolio Mastery 📈, and Token
              Transfers 🚀. Let's dive into the future!
            </Text>
            <View className="flex flex-row items-center space-x-2 ">
              <Text className="text-xs text-gray-400">Powered by Okto</Text>
              <Image
                source={AppImgs.okto}
                accessibilityLabel="logo"
                className="w-6 h-6"
              />
            </View>
          </View>
        </View>

        <CustomButton onPress={handleContinue}>
          <View className="flex flex-row justify-between items-center m-5 mx-10">
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
        </CustomButton>

        {/* <Text className="text-white">Onboarding</Text> */}
      </View>
    </Layout>
  );
}

export default Onboarding;
