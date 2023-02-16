import { func, object } from "prop-types";
import { db, set, ref, update, get, child, push } from "../database/config";

export function startAddingPost(post) {
  const newPostKey = post.id;
  const updates = {};
  updates["/posts/" + newPostKey] = post;
  return (dispatch) => {
    return update(ref(db), updates)
      .then(() => {
        dispatch(addPost(post));
      })
      .catch((e) => {
        console.log(e);
      });
  };
}

export function startLoadingPost() {
  return (dispatch) => {
    return get(child(ref(db), "posts"))
      .then((snapshot) => {
        let posts = [];
        if (snapshot.exists()) {
          snapshot.forEach((childSnapshot) => {
            posts.push(childSnapshot.val());
          });
          dispatch(loadPost(posts));
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
}

export function startLoadingComments() {
  return (dispatch) => {
    return get(child(ref(db), "comments"))
      .then((snapshot) => {
        let comments = {};

        if (snapshot.exists()) {
          snapshot.forEach((childSnapshot) => {
            comments[childSnapshot.key] = Object.values(childSnapshot.val());
          });
          console.log("startLoadingComments", comments);
          dispatch(loadComment(comments));
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
}

export function loadComment(comments) {
  return {
    type: "LOAD_COMMENTS",
    comments,
  };
}

export function startRemovingPost(index, id) {
  const newPostKey = id;
  const updates = {
    ["posts/" + newPostKey]: null,
    ["comments/" + newPostKey]: null,
  };
  return (dispatch) => {
    return update(ref(db), updates)
      .then(() => {
        dispatch(removePost(index));
      })
      .catch((e) => {
        console.log(e);
      });
  };
}
//remove
export function removePost(index) {
  return {
    type: "REMOVE_POST",
    index: index,
  };
}
//add  post
export function addPost(post) {
  return {
    type: "ADD_POST",
    post,
  };
}

export function startAddingComment(comment, postid) {
  const commentListRef = ref(db, "comments/" + postid);
  const newCommentRef = push(commentListRef).key;
  const updates = {};
  updates[newCommentRef] = comment;

  return (dispatch) => {
    return update(commentListRef, updates)
      .then(() => {
        console.log("in start adding comment");
        dispatch(addComment(comment, postid));
      })
      .catch((e) => {
        console.log(e);
      });
  };
}

export function addComment(comment, postid) {
  return {
    type: "ADD_COMMENT",
    comment,
    postid,
  };
}

export function loadPost(posts) {
  return {
    type: "LOAD_POSTS",
    posts,
  };
}
