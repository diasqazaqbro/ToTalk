const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'


let initialState = {
   posts: [
      { message: 'hi, why are you?', id: 1 },
      { message: 'its my first', id: 2 }
   ],
   newPostText: 'sss'
}

const profileReducer = (state = initialState, action) => {
   switch (action.type) {
      case ADD_POST:
         let newPost = {
            id: 5,
            message: state.newPostText
         }
         state.posts.push(newPost)
         state.newPostText = ''
         return state
      case UPDATE_NEW_POST_TEXT:
         state.newPostText = action.newText
         return state
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

export default profileReducer