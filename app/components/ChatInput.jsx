import React from "react";
import { View, TouchableOpacity, TextInput } from "react-native";
import { useState } from "react";
import { PaperAirplaneIcon } from "react-native-heroicons/solid";

function ChatInput({ onPress, placeholder }) {
  const [message, setMessage] = useState("");

  function handleSend() {
    onPress(message);
    setMessage("");
  }

  return (
    <View className="flex-row items-center bg-[#232428] w-85 absolute bottom-10 px-5 py-3 rounded-lg border border-[#3C3C3C]">
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="#D9D9D9"
        value={message}
        onChangeText={setMessage}
        className="flex-1 ml-2 text-white"
      />
      <TouchableOpacity onPress={handleSend}>
        <PaperAirplaneIcon fill="#F1F5F9" size={22} />
      </TouchableOpacity>
    </View>
  );
}
export default ChatInput;
