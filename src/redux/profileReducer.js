const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET-USER-PROFILE'


let initialState = {
   posts: [],
   newPostText: '',
   profile: null
}

const profileReducer = (state = initialState, action) => {
   switch (action.type) {
      case ADD_POST:
         return { ...state, newPostText: '', posts: [...state.posts, { id: 5, message: state.newPostText }] }
      case UPDATE_NEW_POST_TEXT:
         return { ...state, newPostText: action.newText }
      case SET_USER_PROFILE:
         return { ...state, profile: action.profile }
      default:
         return state
   }
}


export const addPostActionCreator = () => {
   return {
      type: ADD_POST
   }
}
export const updateNewPostTextActionCreator = (text) => {
   return {
      type: UPDATE_NEW_POST_TEXT,
      newText: text
   }
}

export const setUserProfile = (profile) => {
   return {
      type: SET_USER_PROFILE, profile
   }
}

export default profileReducer