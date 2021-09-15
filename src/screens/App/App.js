import { useNavigation } from "@react-navigation/core";
import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import AppLoading from "expo-app-loading";
import CustomCard from "../../components/Card";
import { connect, ReactReduxContext, useSelector } from "react-redux";
import { loadPost } from "../../redux/actions/actionConstructor";

function App({userLoadPost}) {
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

  const { store } = useContext(ReactReduxContext);
  console.log(store);

  useEffect(() => {
    getPosts();
    userLoadPost()
  }, []);
  const state = useSelector((state) => {
    if (state) return state;
  });
  console.log(state);

  const renderPost = ({ item }) => <CustomCard item={item} pageType="home" />;

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
        startAsync={userLoadPost}
        onFinish={() => setPostsLoaded(true)}
        onError={console.warn}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userPosts: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    userLoadPost: () => dispatch(loadPost()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
