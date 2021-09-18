import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import DetailsScreen from "../screens/Details/Details";
import AppBar from "../components/AppBar";
import AboutScreen from "../screens/About/About";
import PostDetails from "../screens/PostDetails/PostDetails";
import TopBar from "./TopTab";

const Stack = createStackNavigator();

export default function MainStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        header: (props) => <AppBar {...props} />,
      }}
    >
      <Stack.Screen name="Home" component={TopBar} />
      <Stack.Screen name="Details" component={DetailsScreen} />
      <Stack.Screen name="About" component={AboutScreen} />
      <Stack.Screen name="Post Details" component={PostDetails} />
    </Stack.Navigator>
  );
}
