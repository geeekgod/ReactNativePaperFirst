import { useNavigation } from "@react-navigation/core";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-paper";

export default function DetailsScreen() {
  const navigation = useNavigation();
  return (
    <View style={style.container}>
      <Text>Details Screen</Text>
      <Button mode="contained" onPress={() => navigation.navigate("About")}>
        Go to About Us
      </Button>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
