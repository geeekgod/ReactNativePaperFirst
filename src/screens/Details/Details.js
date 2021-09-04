import { useNavigation } from "@react-navigation/core";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-paper";

export default function DetailsScreen() {
  const navigation = useNavigation();
  return (
    <View style={style.container}>
      <View style={style.textView}>
        <Text>Nothing Special for Details Yet</Text>
      </View>
      <View style={style.buttonContainer}>
        <Button mode="contained" onPress={() => navigation.navigate("About")}>
          Go to About Us
        </Button>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
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
