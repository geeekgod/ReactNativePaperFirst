import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-paper";

export default function AboutScreen({ navigation }) {
  return (
    <View style={style.container}>
      <View style={style.textView}>
        <Text>
          We are Enthusiastic developers creating quality software to make your
          life easy
        </Text>
      </View>
      <View style={style.buttonContainer}>
        <Button mode="contained" onPress={() => navigation.popToTop()}>
          Go Back to Home
        </Button>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  buttonContainer: {
    marginHorizontal: 20,
    marginVertical: 10,
  },
  textView: {
    marginHorizontal: 20,
    marginVertical: 10,
  },
});
