import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer, useTheme } from "@react-navigation/native";
import React from "react";
import { Text, View } from "react-native";
import MainStack from "./MainStack";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Tab = createMaterialBottomTabNavigator();

const SettingsScreen = () => {
  return (
    <View>
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
              <MaterialCommunityIcons name="compass" color={theme.colors.primary} size={25} />
            ),
          }}
          name="Voyage"
          component={MainStack}
        />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default BottomTab;
