import * as React from "react";
import { Appbar, Menu, Snackbar } from "react-native-paper";
import { Dimensions, StyleSheet, View } from "react-native";
import { useEffect } from "react";
// import { useNavigation } from "@react-navigation/core";

const AppBar = ({ navigation, route }) => {
  const [visible, setVisible] = React.useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  console.log(route);

  useEffect(() => {
    closeMenu();
  }, []);
  return (
    <Appbar.Header style={styles.header}>
      {route.name == "Home" ? null : (
        <Appbar.BackAction onPress={navigation.goBack} />
      )}
      <Appbar.Content title={route.name} />
      <Menu
        visible={visible}
        onDismiss={closeMenu}
        anchor={
          <Appbar.Action
            icon="dots-vertical"
            color="white"
            onPress={openMenu}
            onDismiss={closeMenu}
          />
        }
      >
        <Menu.Item
          onPress={() => {
            navigation.navigate("About");
          }}
          title="About Us"
        />
        <Menu.Item
          onPress={() => {
            navigation.navigate("Details");
          }}
          title="Details Of Our App"
        />
          <Menu.Item title="My Profile" disabled />
      </Menu>
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
