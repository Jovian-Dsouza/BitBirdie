import React, { useEffect } from "react";
import { Pressable, View, Text } from "react-native";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { useState } from "react";
import {
  GOOGLE_WEB_CLIENT_ID,
  GOOGLE_ANDROID_CLIENT_ID,
} from '@env';

GoogleSignin.configure({
  webClientId: GOOGLE_WEB_CLIENT_ID,
  androidClientId: GOOGLE_ANDROID_CLIENT_ID,
  scopes: ["profile", "email"],
});

const GoogleLogin = async () => {
  await GoogleSignin.hasPlayServices();
  const userInfo = await GoogleSignin.signIn();
  console.log("UserInfo", userInfo);
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

      // if (idToken) {
      //   const resp = await authAPI.validateToken({
      //     token: idToken,
      //     email: user.email,
      //   });
      //   // await handlePostLoginData(resp.data);
      // }
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
