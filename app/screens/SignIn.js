import React, { useEffect } from "react";
import { Pressable, View, Text } from "react-native";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { useState } from "react";
import { GOOGLE_WEB_CLIENT_ID, GOOGLE_ANDROID_CLIENT_ID } from "@env";
import { authenticate } from "rn-okto-sdk";

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
    <View>
      <Pressable onPress={handleGoogleLogin}>
        <Text>Continue with Google</Text>
      </Pressable>
    </View>
  );
}

export default SignIn;
