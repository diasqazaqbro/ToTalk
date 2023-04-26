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
      case ADD_POST: {
         let newPost = {
            id: 5,
            message: state.newPostText
         }
         const stateCopy = { ...state }
         stateCopy.posts = [...state.posts]
         stateCopy.posts.push(newPost)
         stateCopy.newPostText = ''
         return stateCopy
      }
      case UPDATE_NEW_POST_TEXT:
         const stateCopy = { ...state }
         stateCopy.newPostText = action.newText
         return stateCopy
      default:
         return state
   }
}


export const onAddPost = () => {
   return {
      type: ADD_POST
   }
}
export const updateNewPostText = (text) => {
   return {
      type: UPDATE_NEW_POST_TEXT,
      newText: text
   }
}

export default profileReducer