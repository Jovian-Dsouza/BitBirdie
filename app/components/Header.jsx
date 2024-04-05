import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { ArrowLeftCircleIcon } from "react-native-heroicons/solid";

function Header({children, onPress}) {
  return (
    <View className="flex flex-row w-full mb-4 justify-between items-center">
      <TouchableOpacity onPress={onPress}>
        <ArrowLeftCircleIcon fill="#F1F5F9" fillOpacity="0.5" size={27} />
      </TouchableOpacity>
    
      {children}
      
      {/* TODO remove the hidden button below */}
      <ArrowLeftCircleIcon fill="#F1F5F9" fillOpacity="0" size={27} /> 
    </View>
  );
}

export default Header;
