import React, { useEffect } from "react";
import { Pressable, View, Text, Button, Image } from "react-native";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { useState } from "react";
import { GOOGLE_WEB_CLIENT_ID, GOOGLE_ANDROID_CLIENT_ID } from "@env";
import { authenticate } from "rn-okto-sdk";
import Layout from "../layout";
import { AppImgs } from "../assets/AppImgs";
import CustomButton from "../components/CustomButton";

GoogleSignin.configure({
  webClientId: GOOGLE_WEB_CLIENT_ID,
  androidClientId: GOOGLE_ANDROID_CLIENT_ID,
  scopes: ["profile", "email"],
});

const GoogleLogin = async () => {
  await GoogleSignin.hasPlayServices();
  const userInfo = await GoogleSignin.signIn();
  return userInfo;
};

function LoginIn() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGoogleLogin = async () => {
    setLoading(true);
    try {
      const response = await GoogleLogin();
      const { idToken, user } = response;
      console.log("idToken: ", idToken);
      console.log("user: ", user);
      if (idToken) {
        authenticate(idToken, (result, error) => {
          if (result) {
            // const wallet: Wallet[] = JSON.parse(result);
            console.log(result);
          }
          if (error) {
            console.error("Okto wallet login failure: ", error);
          }
        });
      }
    } catch (apiError) {
      console.error("error", apiError.message);
      // setError(
      //   apiError?.response?.data?.error?.message || 'Something went wrong',
      // );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log("Google android client id: ", GOOGLE_ANDROID_CLIENT_ID);
  }, []);

  return (
    <Layout>
      <View className="flex-1 w-full px-5 py-20">
        <Text className="text-center text-white text-2xl font-bold mb-20">
          Connect Okto Wallet
        </Text>

        <Image
          source={AppImgs.okto}
          accessibilityLabel="logo"
          className="self-center"
        />

        {/* <Text className="mt-5 text-md text-center text-slate-400">Connect with your Okto Wallet account</Text> */}

        <View className="py-3"></View>
        <CustomButton onPress={handleGoogleLogin}>
          <View className="flex flex-row justify-center items-center space-x-3">
            <Image
              source={AppImgs.google}
              accessibilityLabel="google-logo"
              className="w-6 h-6"
            />
            <Text className="text-white text-lg py-2 ">Log In</Text>
          </View>
        </CustomButton>
      </View>
    </Layout>
  );
}

export default LoginIn;
