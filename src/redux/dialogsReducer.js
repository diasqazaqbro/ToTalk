const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

const initialState = {
   message: [
      { message: 'hi', id: 1 },
      { message: 'hi', id: 1 },
      { message: 'how are you?', id: 1 },
      { message: 'iam fine', id: 1 },
      { message: 'what you doing?', id: 1 },
      { message: 'i programming web site', id: 1 },
      { message: 'wow, its cool', id: 1 },
      { message: 'i know :)', id: 1 },
   ],
   newMessageText: 'ss',
   dialog: [
      { name: 'Диас', id: 1 },
      { name: 'Дарын', id: 2 },
      { name: 'Ацдос', id: 3 },
      { name: 'Аббас', id: 4 },
      { name: 'Никита', id: 5 },
      { name: 'Артем', id: 6 },
   ],
}

const dialogsReducer = (state = initialState, action) => {
   switch (action.type) {
      case ADD_MESSAGE:
         let newMessage = {
            id: 5,
            message: state.newMessageText
         }
         state.message.push(newMessage)
         state.newMessageText = ''
         return state
      case UPDATE_NEW_MESSAGE_TEXT:
         state.newMessageText = action.newText
         return state
      default:
         return state
   }
}

export const addMessageActionCreator = () => {
   return {
      type: ADD_MESSAGE
   }
}
export const updateNewMessageTextActionCreator = (text) => {
   return {
      type: UPDATE_NEW_MESSAGE_TEXT,
      newText: text
   }
}
export default dialogsReducer