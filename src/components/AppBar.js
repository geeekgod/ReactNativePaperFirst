import * as React from "react";
import { Appbar, Menu, useTheme } from "react-native-paper";
import { Dimensions, StyleSheet } from "react-native";
import { useEffect } from "react";

const AppBar = ({ navigation, route }) => {
  const [visible, setVisible] = React.useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  console.log(route);

  useEffect(() => {
    closeMenu();
  }, []);
  const theme = useTheme();
  return (
    <Appbar.Header
      style={
        ({ ...styles.header },
        { backgroundColor: theme.colors.background, elevation: 0 })
      }
    >
      {route.name == "Home" ? null : (
        <Appbar.BackAction onPress={navigation.goBack} />
      )}
      <Appbar.Content title={route.name} style={{ elevation: 0 }} />
      <Menu
        visible={visible}
        onDismiss={closeMenu}
        anchor={
          <Appbar.Action
            icon="dots-vertical"
            color={theme.colors.text}
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
  header: {
    flexDirection: "row",
    marginHorizontal: 0,
    paddingHorizontal: 10,
    width: Dimensions.get("window").width,
  },
});

export default AppBar;
