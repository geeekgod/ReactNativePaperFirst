import React, { useEffect } from "react";
import { FlatList, ScrollView, StyleSheet, View } from "react-native";
import { connect, useSelector } from "react-redux";
import { loadPost } from "../../redux/actions/actionConstructor";
import CustomCard from "../../components/Card";
import { Title } from "react-native-paper";

const SaveScreen = ({ userLoadPost }) => {
  const state = useSelector((state) => {
    if (state) return state;
  });

  const findSaves = () => {
    const savedPost = state.posts.find((item) => {
      if (item.saved === true) {
        return item.id;
      }
    });
    console.log(savedPost);
  };

  const renderPost = ({ item }) => (
    <CustomCard item={item} pageType="home" bottomLoc="favourites" />
  );

  useEffect(() =>{
    findSaves()
  })
  if (state.posts) {
    return (
      <View style={styles.container}>
        <Title>Favourites Posts</Title>
        <ScrollView>
          {state.posts && (
            <FlatList
              style={{
                paddingVertical: 5,
              }}
              data={state.posts}
              renderItem={renderPost}
              keyExtractor={(item) => item.id}
            />
          )}
        </ScrollView>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <Title>Favourites Posts</Title>
        {userLoadPost()}
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 35,
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
