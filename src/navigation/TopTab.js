import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { Text, View } from "react-native";
import App from "../screens/App/App";
import MainStack from "./MainStack";

const Tab = createMaterialTopTabNavigator();

const Test = () => {
  return (
    <View>
      <Text>Test Page</Text>
    </View>
  );
};

function TopBar() {
  return (
      <Tab.Navigator initialRouteName="Cooking">
        <Tab.Screen name="Cooking" component={App} />
        <Tab.Screen name="Baking" component={App} />
        <Tab.Screen name="Drinks" component={App} />
      </Tab.Navigator>
  );
}
export default TopBar;
