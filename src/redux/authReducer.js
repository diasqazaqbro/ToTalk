const TOGGAL_IS_FETCHING = 'TOGGAL-IS-FETCHING'
const SET_USER_DATA = 'SET-USER-DATA'
// const



let initialUsers = {
   id: null,
   email: null,
   login: null,
   isAuth: false,
   isFetching: false
}

const authReducer = (state = initialUsers, action) => {
   switch (action.type) {
      case SET_USER_DATA:
         return { ...state, ...action.data, isAuth: true }
      case TOGGAL_IS_FETCHING:
         return { ...state, isFetching: action.isFetching }
      default:
         return state
   }
}

export const setUserData = (id, email, login) => ({ type: SET_USER_DATA, data: { id, email, login } })
export const setIsFetching = (isFetching) => { return ({ type: TOGGAL_IS_FETCHING, isFetching }) }

export default authReducer