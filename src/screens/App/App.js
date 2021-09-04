import { useNavigation } from "@react-navigation/core";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, useTheme } from "react-native-paper";
import AppBar from "../../components/AppBar";

export default function App() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
  });

  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button mode="contained" onPress={() => navigation.navigate("Details")}>
        Go to details
      </Button>
    </View>
  );
}
