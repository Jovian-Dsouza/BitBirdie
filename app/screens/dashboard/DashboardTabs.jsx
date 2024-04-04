import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Layout from "../../layout";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./HomeScreen";
import SearchScreen from "./SearchScreen";
import ChatScreen from "./ChatScreen";
import HistoryScreen from "./HistroyScreen";
import SettingsScreen from "./SettingsScreen";
import { HomeIcon } from "../../assets/svgs/HomeIcon";
import { SearchIcon } from "../../assets/svgs/SearchIcon";
import { ClockIcon } from "../../assets/svgs/ClockIcon";
import { ChatIcon } from "../../assets/svgs/ChatIcon";
import { CogIcon } from "../../assets/svgs/CogIcon";

function SideTabBarIcon({
  focused,
  name,
  Icon,
  activeColor = "#fff",
  inActiveColor = "#676D75",
}) {
  const color = focused ? activeColor : inActiveColor;
  return (
    <View className="flex-1 justify-center items-center my-4">
      <Icon width={24} height={24} color={color} />
      <Text style={{ color: color }}>{name}</Text>
    </View>
  );
}

function CenterTabBarIcon({
  focused,
  activeColor = "#539DF3",
  inActiveColor = "#1D1F24",
}) {
  const color = focused ? activeColor : inActiveColor;
  return (
    <View
      style={{
        backgroundColor: color,
        width: "90%",
        height: "90%",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 9999,
      }}
    >
      <ChatIcon width={24} height={24} color="#F1F5F9" />
    </View>
  );
}

function CenterTabBarButton({ children, onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="-top-6 items-center justify-center bg-[#1C1E24] rounded-full w-14 h-14"
    >
      {children}
    </TouchableOpacity>
  );
}

const Tab = createBottomTabNavigator();
function DashboardTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarStyle: { backgroundColor: "#14171A", height: 56 },
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <SideTabBarIcon focused={focused} name="Home" Icon={HomeIcon} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <SideTabBarIcon focused={focused} name="Search" Icon={SearchIcon} />
          ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <CenterTabBarIcon focused={focused} Icon={ChatIcon} />
          ),
          tabBarButton: (props) => <CenterTabBarButton {...props} />,
        }}
      />
      <Tab.Screen
        name="History"
        component={HistoryScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <SideTabBarIcon focused={focused} name="History" Icon={ClockIcon} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <SideTabBarIcon focused={focused} name="Settings" Icon={CogIcon} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default DashboardTabs;
