import { useNavigation } from "@react-navigation/core";
import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import {
  Dimensions,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import AppLoading from "expo-app-loading";
import CustomCard from "../../components/Card";
import { connect, ReactReduxContext, useSelector } from "react-redux";
import { loadImgAvatar, loadPost } from "../../redux/actions/actionConstructor";
import { Avatar } from "react-native-paper";
import { useTheme } from "@react-navigation/native";

function App({ userLoadPost, userLoadImage, userPosts, userImgs }) {
  const theme = useTheme();
  const styles = StyleSheet.create({
    container: {
      display: "flex",
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
  });

  const { store } = useContext(ReactReduxContext);
  const loadData = async () => {
    userLoadPost();
    userLoadImage();
  };

  const state = useSelector((state) => {
    if (state) return state;
  });
  const renderPost = ({ item }) => <CustomCard item={item} pageType="home" />;
  const renderAvtar = ({ item }) => (
    <View
      style={{
        marginHorizontal: 5,
        borderWidth: 5,
        borderColor: theme.colors.primary,
        height: 84,
        borderRadius: 84 / 2,
      }}
    >
      <Avatar.Image
        size={74}
        source={{ uri: userImgs.results[0].picture.large }}
        key={Math.random().toString()}
      />
    </View>
  );

  const [postsLoaded, setPostsLoaded] = useState(false);
  if (postsLoaded) {
    return (
      <View style={styles.container}>
        <ScrollView>
          {state.posts && (
            <FlatList
              style={{
                paddingVertical: 5,
              }}
              data={state.posts}
              renderItem={renderPost}
              keyExtractor={(item) => item.id.toString()}
              horizontal
            />
          )}
          {state.posts && (
            <FlatList
              style={{
                paddingVertical: 5,
              }}
              data={state.posts}
              renderItem={renderPost}
              keyExtractor={(item) => item.id.toString()}
              horizontal
            />
          )}
          {userImgs && (
            <FlatList
              style={{
                paddingVertical: 5,
              }}
              data={userImgs.results[0].picture.large}
              renderItem={renderAvtar}
              horizontal
            />
          )}
          {userImgs && (
            <FlatList
              style={{
                paddingVertical: 5,
              }}
              data={userImgs.results[0].picture.large}
              renderItem={renderAvtar}
              horizontal
            />
          )}
        </ScrollView>
      </View>
    );
  } else {
    return (
      <AppLoading
        startAsync={loadData}
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
