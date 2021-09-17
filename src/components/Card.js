import { useNavigation } from "@react-navigation/core";
import * as React from "react";
import { Dimensions, View } from "react-native";
import { Button, Card, Paragraph } from "react-native-paper";

const CustomCard = ({ item, pageType }) => {
  const navigation = useNavigation();
  const buttonOnType = () => {
    switch (pageType) {
      case "home":
        return (
          <Button
            style={{
              marginTop: 10,
              borderRadius: 8,
              elevation: 2, // display: "flex",
              // maxWidth: "429px",
              // height: "53px",
              // width: "429px",
              width: 130,
              borderRadius: 32,
              shadowOpacity: 5,
              // boxShadow: "0px 4px 26px 0px rgba(0, 0, 0, 0.25)",
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
              elevation: 0,
            }}
            mode="contained"
            onPress={() => navigation.popToTop()}
          >
            Feed
          </Button>
        );
    }
  };
  return (
    <Card
      style={{
        padding: 10,
        margin: 15,
        borderWidth: 0,
        maxHeight: 290,
        maxWidth: Dimensions.get("screen").width - 35,
        elevation: 0,
        borderRadius: 20,
      }}
    >
      <View style={{ display: "flex", flexDirection: "row", height: "100%" }}>
        <View
          style={{
            width: "50%",
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
            source={{ uri: "https://picsum.photos/seed/" + item.id + "/700" }}
          />
        </View>
        <View
          style={{
            width: "50%",
            height: "100%",
            display: "flex",
            alignItems: "flex-end",
            overflow: "hidden",
          }}
        >
          <Card.Title title={item.title} numberOfLines={3} />
          <Card.Content>
            <Paragraph numberOfLines={7}>{item.body}</Paragraph>
          </Card.Content>
          <Card.Actions>{buttonOnType()}</Card.Actions>
        </View>
      </View>
    </Card>
  );
};
export default CustomCard;
