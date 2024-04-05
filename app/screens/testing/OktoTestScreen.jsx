import React from "react";
import { View, Text, TextInput, Button } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Layout from "../../layout";
import { transferFunds, getSupportedTokens, openOktoBottomsheet } from "rn-okto-sdk";
import { useState } from "react";

/**
 * 
 * transferFunds(networkName = "SOLANA_DEVNET",
      tokenAddress = "4zMMC9srt5Ri5X14GAgXhaHii3GnPAEERYPJgZJDncDU", //USDC
      recipientAddress = "Eeaq9tfNzk2f8ijdiHNZpjsBV96agB2F3bNmwx6fdVr6", //My phantom wallet
      quantity = "1",
      callback)
 */
const TransferTokens = () => {
  const [networkName, setNetworkName] = useState("SOLANA_DEVNET");
  const [tokenAddress, setTokenAddress] = useState(
    "4zMMC9srt5Ri5X14GAgXhaHii3GnPAEERYPJgZJDncDU"
  );
  const [quantity, setQuantity] = useState("1");
  const [recipientAddress, setRecipientAddress] = useState(
    "Eeaq9tfNzk2f8ijdiHNZpjsBV96agB2F3bNmwx6fdVr6"
  );

  const handleSubmit = () => {
    transferFunds(
      networkName = networkName,
      tokenAddress = tokenAddress,
      recipientAddress = recipientAddress,
      quantity = quantity,
      (result, error) => {
        if (result) {
          const result = JSON.parse(result);
          console.log(result.data);
        }
        if (error) {
            console.log(error)
        }
      }
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#fff", padding: 5 }}>
      <Text className="text-lg">Transfer Tokens</Text>
      <TextInput
        value={networkName}
        onChangeText={(value) => setNetworkName(value)}
        placeholder="Enter Network Name"
      />
      <TextInput
        value={tokenAddress}
        onChangeText={(value) => setTokenAddress(value)}
        placeholder="Enter Token Address"
      />
      <TextInput
        value={quantity}
        onChangeText={(value) => setQuantity(value)}
        placeholder="Enter Quantity"
      />
      <TextInput
        value={recipientAddress}
        onChangeText={(value) => setRecipientAddress(value)}
        placeholder="Enter Recipient Address"
      />
      <Button title="Transfer Tokens" onPress={handleSubmit} />
    </View>
  );
};


const GetSupportedTokens = () => {
  const handleSubmit = () => {
    getSupportedTokens((result, error) => {
      if (result) {
        const tokens = JSON.parse(result);
        console.log(tokens);
      }
      else {
        console.error(error)
      }
    });
  };

  return (
    <View style={{ backgroundColor: "#fff", padding: 5 }}>
      <Button title="Get Supported Tokens" onPress={handleSubmit} />
    </View>
  );
};

function OktoTestScreen() {
  return (
    <Layout>
      <View className="flex-1 w-full px-5 py-10 space-y-5 justify-center items-center">
        <Text className="text-2xl text-white font-bold">Okto Testing</Text>
        <Button title="Buttom Sheet" onPress={openOktoBottomsheet} />
        <GetSupportedTokens />
        <TransferTokens />
      </View>
    </Layout>
  );
}

export default OktoTestScreen;
