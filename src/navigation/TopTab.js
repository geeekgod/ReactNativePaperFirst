import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useTheme } from "@react-navigation/native";
import React from "react";
import { Text, View } from "react-native";
import App from "../screens/App/App";

const Tab = createMaterialTopTabNavigator();

function TopBar() {
  const theme = useTheme();
  return (
    <Tab.Navigator
      initialRouteName="Cooking"
      screenOptions={{
        tabBarIndicatorStyle: {
          backgroundColor: theme.colors.primary,
        },
        tabBarStyle: {
          backgroundColor: theme.colors.background,
          elevation: 0,
        },
      }}
    >
      <Tab.Screen name="Cooking" component={App} />
      <Tab.Screen name="Baking" component={App} />
      <Tab.Screen name="Drinks" component={App} />
    </Tab.Navigator>
  );
}
export default TopBar;
