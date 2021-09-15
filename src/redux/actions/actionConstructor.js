import axios from "axios";
import * as actionTypes from "./actionTypes";
// export const loadPost = (url) => ({
//   type: actionTypes.LOAD_POST,
//   ur: url,
// });
export const loadPostSuccess = (posts) => {
  return {
    type: actionTypes.LOAD_POST_SUCCESS,
    payload: posts,
  };
};

export const loadPostFailure = (error) => {
  return {
    type: actionTypes.LOAD_POST_FAILURE,
    payload: error,
  };
};

export const loadPost = () => {
  return (dispatch) => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        const posts = res.data;
        dispatch(loadPostSuccess(posts));
      })
      .catch((err) => {
        const errMsg = err.message;
        dispatch(loadPostFailure(errMsg));
      });
  };
};
