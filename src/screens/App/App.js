import { useNavigation } from "@react-navigation/core";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import AppLoading from "expo-app-loading";
import CustomCard from "../../components/Card";

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
    <CustomCard item={item} pageType="home" />
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
            horizontal
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
