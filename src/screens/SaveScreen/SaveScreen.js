import AppLoading from "expo-app-loading";
import React, { useState } from "react";
import { FlatList, ScrollView, StyleSheet, View } from "react-native";
import { connect, useSelector } from "react-redux";
import { loadPost } from "../../redux/actions/actionConstructor";
import CustomCard from "../../components/Card";

const SaveScreen = ({ userLoadPost }) => {
  const [postsLoaded, setPostsLoaded] = useState(false);

  const state = useSelector((state) => {
    if (state) return state;
  });

  const renderPost = ({ item }) => (
    <CustomCard item={item} pageType="home" bottomLoc="favourites" />
  );
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
              keyExtractor={(item) => item.id}
              horizontal
            />
          )}
        </ScrollView>
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
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

const mapStateToProps = (state) => {
  return {
    userPosts: state.posts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    userLoadPost: () => dispatch(loadPost()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SaveScreen);
