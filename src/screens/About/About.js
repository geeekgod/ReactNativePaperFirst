import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-paper";

export default function AboutScreen({ navigation }) {
  return (
    <View style={style.container}>
      <Text>About Screen</Text>
      <Button mode="contained" onPress={() => navigation.popToTop()}>
        Go Back to Home
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
