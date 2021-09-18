import { useNavigation } from "@react-navigation/core";
import { useTheme } from "@react-navigation/native";
import * as React from "react";
import { Dimensions, View } from "react-native";
import {
  Button,
  Card,
  Divider,
  IconButton,
  Paragraph,
} from "react-native-paper";
import { connect } from "react-redux";
import { addToSave } from "../redux/actions/actionConstructor";

const CustomCard = ({ item, pageType, addToSaveEvent, bottomLoc }) => {
  const theme = useTheme();
  const navigation = useNavigation();
  const buttonOnType = () => {
    switch (pageType) {
      case "home":
        return (
          <Button
            style={{
              marginTop: 10,
              borderRadius: 8,
              elevation: 2,
              width: 120,
              borderRadius: 32,
              shadowOpacity: 5,
              backgroundColor: "rgba(193, 12, 153, 1)",
            }}
            mode="contained"
            onPress={() => navigation.navigate("Post Details", item)}
          >
            Read More
          </Button>
        );
      case "details":
        return (
          <Button
            icon="home"
            style={{
              marginTop: 10,
              borderRadius: 8,
              elevation: 2,
              width: 120,
              borderRadius: 32,
              shadowOpacity: 5,
              backgroundColor: "rgba(193, 12, 153, 1)",
            }}
            mode="contained"
            onPress={() => navigation.popToTop()}
          >
            Feed
          </Button>
        );
    }
  };
  switch (bottomLoc) {
    case "home":
      return (
        <Card
          style={{
            padding: 10,
            margin: 15,
            borderWidth: 0,
            maxHeight: 250,
            maxWidth: Dimensions.get("screen").width - 25,
            elevation: 0,
            borderRadius: 20,
          }}
        >
          <View
            style={{ display: "flex", flexDirection: "row", height: "100%" }}
          >
            <IconButton
              icon={item.saved === true ? "bookmark" : "bookmark-outline"}
              color={theme.colors.primary}
              style={{ position: "absolute", top: 0, left: 0, zIndex: 999 }}
              size={30}
              onPress={() => addToSaveEvent(parseInt(item.id))}
              // onPress={() => console.log(item.id)}
            />
            <View
              style={{
                width: "60%",
                height: "100%",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Card.Cover
                style={{
                  height: "100%",
                  width: "100%",
                  borderTopLeftRadius: 20,
                  borderBottomLeftRadius: 20,
                  marginVertical: "auto",
                }}
                source={{
                  uri: "https://picsum.photos/seed/" + item.id + "/700",
                }}
              />
            </View>
            <View
              style={{
                width: "40%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
              }}
            >
              <Card.Title title={item.title} numberOfLines={3} />
              <Card.Content>
                <Paragraph>Servings: {item.userId}</Paragraph>
                <Divider style={{ marginVertical: 5 }} />
                <Paragraph>
                  Time: {item.userId * Math.floor(Math.random() * 40)} Mins
                </Paragraph>
                <Divider style={{ marginVertical: 5 }} />
              </Card.Content>
              {bottomLoc === "home" ? (
                <Card.Actions>{buttonOnType()}</Card.Actions>
              ) : null}
            </View>
          </View>
        </Card>
      );
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToSaveEvent: (id) => dispatch(addToSave(id)),
  };
};

export default connect(null, mapDispatchToProps)(CustomCard);
