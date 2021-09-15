import { useNavigation } from "@react-navigation/core";
import * as React from "react";
import { View } from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

const PostDetails = ({ route }) => {
  const item = route.params;
  const navigation = useNavigation();
  return (
    <Card
      style={{
        padding: 10,
        margin: 15,
        borderWidth: 0,
        maxHeight: 290,
        elevation: 0,
        borderRadius: 20,
      }}
    >
      <View style={{ display: "flex", flexDirection: "row" }}>
        <View
          style={{
            width: "40%",
            height: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Card.Cover
            style={{
              height: "97%",
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
            width: "60%",
            height: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Card.Title title={item.title} numberOfLines={3} />
          <Card.Content>
            <Paragraph numberOfLines={7}>{item.body}</Paragraph>
          </Card.Content>
          <Card.Actions>
            <Button
              icon="home"
              style={{ marginTop: 10 }}
              mode="contained"
              onPress={() => navigation.popToTop()}
            >
              Go Back to Feed
            </Button>
          </Card.Actions>
        </View>
      </View>
    </Card>
  );
};

export default PostDetails;
