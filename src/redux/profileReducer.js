import { getProfile, getStatus, putStatus } from "../api/api.js";
const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";

let initialState = {
  posts: [],
  newPostText: "",
  profile: null,
  status: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 1,
        message: state.newPostText,
      };
      const stateCopy = { ...state };
      stateCopy.posts = [...state.posts];
      stateCopy.posts.push(newPost);
      stateCopy.newPostText = "";
      return stateCopy;
    }
    case UPDATE_NEW_POST_TEXT:
      const stateCopy = { ...state };
      stateCopy.newPostText = action.newText;
      return stateCopy;
    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile };
    }
    case SET_STATUS: {
      return { ...state, status: action.status };
    }
    default:
      return state;
  }
};

export const onAddPost = () => ({ type: ADD_POST });
export const updateNewPostText = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});
export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});
export const setStatus = (status) => ({
  type: SET_STATUS,
  status,
});

export const getProfileThunkCreator = (userId) => (dispatch) => {
  getProfile(userId).then((response) => {
    dispatch(setUserProfile(response.data));
  });
};

export const getStatusThunkCreator = (userId) => (dispatch) => {
  getStatus(userId).then((response) => {
    debugger
    dispatch(setStatus(response.data));
  });
};
export const putStatusThunkCreator = (status) => (dispatch) => {
  putStatus(status).then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(setStatus(status));
    }
  });
};
export default profileReducer;
