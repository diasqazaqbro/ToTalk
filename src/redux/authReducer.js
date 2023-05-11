import { getAuth, login, logout } from "../api/api";
const SET_USER_DATA = "SET_USER_DATA";

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
        isAuth: true,
      };
    default:
      return state;
  }
};
export const setUserData = (userId, email, login, isAuth) => ({
  type: SET_USER_DATA,
  payload: { userId, email, login },
});

export const getAuthThunkCreator = () => (dispatch) => {
  getAuth().then((response) => {
    if (response.data.resultCode === 0) {
      let { id, email, login } = response.data.data;
      dispatch(setUserData(id, email, login, true));
    }
  });
};

export const loginThunkCreator = (email, password, rememberMe) => (dispatch) => {
  login(email, password, rememberMe).then(response => {
    if (response.data.resultCode === 0) {
      dispatch(getAuthThunkCreator())
    }
  })
};
export const logoutThunkCreator = () => (dispatch) => {
  logout().then(response => {
    if (response.data.resultCode === 0) {
      dispatch(setUserData(null, null, null, false))
    }
  })
};
export default authReducer;
