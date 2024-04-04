import React from 'react'
import { TouchableOpacity } from 'react-native';


function CustomButton({children, onPress}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="bg-[#191A1E] rounded-full border-2 border-[#AEAEAE]"
    >
      {children}
    </TouchableOpacity>
  );
}

export default CustomButton