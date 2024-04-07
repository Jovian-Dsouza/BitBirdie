import React from "react";
import { View, Text } from "react-native";
import Layout from "../layout";
import { ScrollView } from "react-native-gesture-handler";
import ChatInput from "../components/ChatInput";
import MessageGradient from "../components/MessageGradient";
import Message from "../components/Message";
import Header from "../components/Header";

function ConversationScreen() {
  return (
    <Layout>
      <View className="flex-1 w-full px-5 py-10 space-y-5 items-center">
        <Header>
          <Text className="text-white text-lg font-semibold">Conversation</Text>
        </Header>
        
        <MessageGradient>
          How can I optimize my crypto portfolio based on current market trends?
        </MessageGradient>
        <View className="p-2"></View>
        <Message>You're welcome! To optimize your crypto portfolio:</Message>
        <ChatInput placeholder="Type your Message here" onPress={() => {}} />
      </View>
    </Layout>
  );
}

export default ConversationScreen;
