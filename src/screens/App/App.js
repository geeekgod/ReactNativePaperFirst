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

  const renderPost = ( {item} ) =>(
        <Card style={{padding:10, margin:15}}>
          <Card.Title
            title={item.title}
            // left={LeftContent}
          />
          <Card.Content>
            <Paragraph>{item.body}</Paragraph>
          </Card.Content>
          <Card.Actions>
            <Button>Cancel</Button>
            <Button>Ok</Button>
          </Card.Actions>
        </Card>
  )

  const navigation = useNavigation();
  const [postsLoaded, setPostsLoaded] = useState(false);
  if (postsLoaded) {
    return (
      <View style={styles.container}>
        <Text>Home Screen</Text>
        <Button mode="contained" onPress={() => navigation.navigate("Details")}>
          Go to details
        </Button>
        {post && (
          <FlatList
            data={post}
            renderItem={renderPost}
            keyExtractor={(item) => item.id}
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
