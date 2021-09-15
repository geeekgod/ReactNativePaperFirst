import { useNavigation } from "@react-navigation/core";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import {
  Button,
  useTheme,
  Avatar,
  Card,
  Title,
  Paragraph,
} from "react-native-paper";
import AppLoading from "expo-app-loading";

export default function App() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
  });

  const [post, setPost] = useState([]);

  const getPosts = async () => {
    try {
      let response = await fetch("https://jsonplaceholder.typicode.com/posts");
      let json = await response.json();
      setPost(json);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  const renderPost = ({ item }) => (
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
          }}
        >
          <Card.Title title={item.title} numberOfLines={3} />
          <Card.Content>
            <Paragraph numberOfLines={7}>{item.body}</Paragraph>
          </Card.Content>
          <Card.Actions>
            <Button
              mode="contained"
              onPress={() => navigation.navigate("Post Details", item)}
            >
              Read More
            </Button>
          </Card.Actions>
        </View>
      </View>
      {/* <Card.Title title={item.title} />
      <Card.Content>
        <Paragraph>{item.body}</Paragraph>
      </Card.Content>
      <Card.Actions>
        <Button
          mode="contained"
          onPress={() => navigation.navigate("Post Details", item)}
        >
          Read More
        </Button>
      </Card.Actions> */}
    </Card>
  );

  const navigation = useNavigation();
  const [postsLoaded, setPostsLoaded] = useState(false);
  if (postsLoaded) {
    return (
      <View style={styles.container}>
        {post && (
          <FlatList
            data={post}
            renderItem={renderPost}
            keyExtractor={(item) => item.id.toString()}
          />
        )}
      </View>
    );
  } else {
    return (
      <AppLoading
        startAsync={getPosts}
        onFinish={() => setPostsLoaded(true)}
        onError={console.warn}
      />
    );
  }
}
