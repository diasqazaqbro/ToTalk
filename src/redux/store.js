import dialogsReducer from "./dialogsReducer"
import navbarReducer from "./navbarReducer"
import profileReducer from "./profileReducer"

let store = {
   _state: {
      profilePage: {
         posts: [
            { message: 'hi, why are you?', id: 1 },
            { message: 'its my first', id: 2 }
         ],
         newPostText: ''
      },
      messagesPage: {
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
      },
      navBar: {

      }
   },

   _callSubscriber() {
      console.log('state was changed')
   },

   getState() {
      return this._state
   },

   subscribe(observer) {
      this._callSubscriber = observer
   },

   dispatch(action) {
      this._state.profilePage = profileReducer(this._state.profilePage, action)
      this._state.messagesPage = dialogsReducer(this._state.messagesPage, action)
      this._state.navBar = navbarReducer(this._state.navBar, action)
      this._callSubscriber(this._state)
   },

}

export default store


// let x = 1000
// let gul = () => {
//    while (x > 6) {
//       let addGul = (addGulF) => {
//          let newPost = {
//             id: 5,
//             message: (addGulF)
//          }
//          store._state.profilePage.posts.push(newPost)
//       }
//       addGul(x + ' - 7 = ' + (x - 7))
//       x -= 7
//    }

// }

// gul()