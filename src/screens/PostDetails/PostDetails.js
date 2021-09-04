import { useNavigation } from "@react-navigation/core";
import * as React from "react";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

const PostDetails = ({ route }) => {
  const item = route.params;
  const navigation = useNavigation();
  return (
    <Card style={{ padding: 10, margin: 15 }}>
      <Card.Cover
        source={{ uri: "https://picsum.photos/seed/" + item.id + "/700" }}
      />
      <Card.Title title={item.title} />
      <Card.Content>
        <Paragraph>{item.body}</Paragraph>
      </Card.Content>
      <Card.Actions>
        <Button
          icon="home"
          style={{ marginTop: 40 }}
          mode="contained"
          onPress={() => navigation.popToTop()}
        >
          Go Back to Feed
        </Button>
      </Card.Actions>
    </Card>
  );
};

export default PostDetails;
