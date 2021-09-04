import * as React from "react";
import { Appbar } from "react-native-paper";
import { Dimensions, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/core";

const AppBar = ({ navigation, previous, route }) => {
  const _handleSearch = () => console.log("Searching");

  const _handleMore = () => console.log("Shown more");
  console.log(route);
  return (
    <Appbar.Header style={styles.header}>
      {route.name == "Home" ? null : (
        <Appbar.BackAction onPress={navigation.goBack} />
      )}
      <Appbar.Content title={route.name} />
      {/* <Appbar.Action icon="magnify" onPress={_handleSearch} /> */}
      <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
  bottom: {
    position: "absolute",
    width: Dimensions.get("window").width,
    marginHorizontal: 0,
    top: 0,
    left: 0,
    right: 0,
  },
  header: {
    flexDirection: "row",
    marginHorizontal: 0,
    paddingHorizontal: 10,
    width: Dimensions.get("window").width,
  },
});

export default AppBar;
