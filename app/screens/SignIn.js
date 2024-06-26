import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { Pressable, View, Text, Button } from "react-native";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { useState } from "react";
import { GOOGLE_WEB_CLIENT_ID, GOOGLE_ANDROID_CLIENT_ID } from "@env";
import { authenticate } from "rn-okto-sdk";
import AppLayout from "../layout";

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

function SignIn() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGoogleLogin = async () => {
    setLoading(true);
    try {
      const response = await GoogleLogin();
      const { idToken, user } = response;
      console.log("idToken: ", idToken)
      console.log("user: ", user)
      if (idToken) {
        authenticate(idToken, (result, error) => {
          if (result) {
            // const wallet: Wallet[] = JSON.parse(result);
            console.log(result);
          }
          if (error) {
            console.error("Okto wallet login failure: ", error)
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
    console.log("Google android client id: ", GOOGLE_ANDROID_CLIENT_ID)
  }, [])

  return (
    <AppLayout>
    {/* <View className="flex-1 items-center justify-center bg-black"> */}
      <Text className="text-xl font-bold mb-3">Okto API App</Text>
      <StatusBar style="auto" />
      <View>
        <Button title="Google Sign In" onPress={handleGoogleLogin} />
      </View>
      <View className="p-2" />
      <Button
        title="Open Okto Profile"
        onPress={() => {
          openOktoBottomsheet();
        }}
      />
    </AppLayout>
  );
}

export default SignIn;
