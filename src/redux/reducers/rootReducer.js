import * as actionTypes from "../actions/actionTypes";

const initState = {
  posts: [],
};

export const RootReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_POST_SUCCESS:
      let newPost = action.payload;
      return {
        ...state,
        posts: newPost,
      };
    case actionTypes.LOAD_POST_FAILURE:
      console.log("LOAD POST ERROR", action.payload);
  }
  return state;
};
