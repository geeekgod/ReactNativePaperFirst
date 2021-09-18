import { useNavigation } from "@react-navigation/core";
import * as React from "react";
import CustomCard from "../../components/Card";

const PostDetails = ({ route }) => {
  const item = route.params;
  return <CustomCard item={item} pageType="details" bottomLoc="home" />;
};

export default PostDetails;
