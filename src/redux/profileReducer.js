import { getProfile, getStatus, putStatus } from "../api/api.js";
const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";

let initialState = {
  posts: [],
  profile: null,
  status: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 1,
        message: action.postBody,
      };
      const stateCopy = { ...state };
      stateCopy.posts = [...state.posts];
      stateCopy.posts.push(newPost);
      return stateCopy;
    }
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

export const onAddPost = (postBody) => ({ type: ADD_POST, postBody });

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
    debugger;
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
