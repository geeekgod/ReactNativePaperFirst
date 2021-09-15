import { useNavigation } from "@react-navigation/core";
import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import AppLoading from "expo-app-loading";
import CustomCard from "../../components/Card";
import { connect, ReactReduxContext, useSelector } from "react-redux";
import { loadImgAvatar, loadPost } from "../../redux/actions/actionConstructor";
import { Avatar } from "react-native-paper";

function App({ userLoadPost, userLoadImage, userPosts, userImgs }) {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
  });

  const { store } = useContext(ReactReduxContext);

  // useEffect(() => {
  //   userLoadPost();
  //   userLoadImage();
  // }, []);
  const state = useSelector((state) => {
    if (state) return state;
  });
  const renderPost = ({ item }) => <CustomCard item={item} pageType="home" />;
  const renderAvtar = ({ item }) => (
    <Avatar.Image
      size={74}
      source={{ uri: userImgs.results[0].picture.medium }}
    />
  );

  const [postsLoaded, setPostsLoaded] = useState(false);
  if (postsLoaded) {
    return (
      <View style={styles.container}>
        {state.posts && (
          <FlatList
            style={{ backgroundColor: "black" }}
            data={state.posts}
            renderItem={renderPost}
            keyExtractor={(item) => item.id.toString()}
            horizontal
          />
        )}
        {userImgs && (
          <FlatList
            data={userImgs.results[0].picture.medium}
            renderItem={renderAvtar}
            horizontal
          />
        )}
      </View>
    );
  } else {
    return (
      <AppLoading
        startAsync={(userLoadPost, userLoadImage)}
        onFinish={() => setPostsLoaded(true)}
        onError={console.warn}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userPosts: state.posts,
    userImgs: state.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    userLoadPost: () => dispatch(loadPost()),
    userLoadImage: () => dispatch(loadImgAvatar()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
