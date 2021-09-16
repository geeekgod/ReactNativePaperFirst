import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer, useTheme } from "@react-navigation/native";
import React from "react";
import { Text, View } from "react-native";
import MainStack from "./MainStack";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Tab = createMaterialBottomTabNavigator();

const SearchScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <Text>Settings Screen</Text>
    </View>
  );
};

function BottomTab() {
  const theme = useTheme();
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Voyage"
        barStyle={{
          backgroundColor: theme.colors.background,
          height: 70,
        }}
      >
        <Tab.Screen
          options={{
            tabBarIcon: () => (
              <MaterialCommunityIcons
                name="compass"
                color={theme.colors.primary}
                size={25}
              />
            ),
          }}
          name="Voyage"
          component={MainStack}
        />
        <Tab.Screen
          options={{
            tabBarIcon: () => (
              <MaterialCommunityIcons
                name="magnify"
                color={theme.colors.primary}
                size={25}
              />
            ),
          }}
          name="Search"
          component={SearchScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default BottomTab;