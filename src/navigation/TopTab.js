import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { Text, View } from "react-native";
import MainStack from "./MainStack";

const Tab = createMaterialTopTabNavigator();

const Test = () => {
  return (
    <View>
      <Text>Test Page</Text>
    </View>
  );
};

function MyTabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Feed">
        <Tab.Screen name="Feed" component={MainStack} />
        <Tab.Screen name="Test" component={Test} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default MyTabs;
