import posts from "../data/posts";
import { combineReducers } from "redux";

function commentReducer(state = {}, action) {
  switch (action.type) {
    case "ADD_COMMENT":
      if (!state[action.postid]) {
        return { ...state, [action.postid]: [action.comment] };
      } else {
        return {
          ...state,
          [action.postid]: [...state[action.postid], action.comment],
        };
      }
    case "LOAD_COMMENTS":
      return action.comments;
    default:
      return state;
  }
}

function postReducer(state = posts, action) {
  //remove photo
  switch (action.type) {
    case "REMOVE_POST":
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1),
      ];
    case "ADD_POST":
      return [...state, action.post];
    case "LOAD_POSTS":
      return action.posts;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  comments: commentReducer,
  posts: postReducer,
});

export default rootReducer;
