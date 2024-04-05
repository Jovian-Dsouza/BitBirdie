import React from 'react'
import BorderGradient from './BorderGradient';
import { Text, View } from 'react-native';

function MessageGradient({ children, className="" }) {
  return (
    <View className="flex flex-row justify-end w-full">
      <BorderGradient>
        <Text className={`max-w-[90%] text-white px-3 py-2 ${className}`}>
          {children}
        </Text>
      </BorderGradient>
    </View>
  );
}

export default MessageGradient