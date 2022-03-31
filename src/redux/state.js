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
         dialog: [
            { name: 'Диас', id: 1 },
            { name: 'Дарын', id: 2 },
            { name: 'Ацдос', id: 3 },
            { name: 'Аббас', id: 4 },
            { name: 'Никита', id: 5 },
            { name: 'Артем', id: 6 },
         ],
      },
   },
   getState() {
      return this._state
   },
   _callSubscriber() {
      console.log('state was changed')
   },
   addPost(newPostMessage) {
      let newPost = {
         id: 5,
         message: newPostMessage
      }
      this._state.profilePage.posts.push(newPost)
      this._state.profilePage.newPostText = ''
      this._callSubscriber(this._state)
   },
   updateNewPostText(newText) {
      this._state.profilePage.newPostText = newText
      this._callSubscriber(this._state)
   },
   subscribe(observer) {
      this._callSubscriber = observer
   }

}

// window.state = state
export default store


// let x = 1000
// let gul = () => {
//    while (x > 6) {
//       let addGul = (addGulF) => {
//          let newPost = {
//             id: 5,
//             message: (addGulF)
//          }
//          state.profilePage.posts.push(newPost)
//       }
//       addGul(x + ' - 7 = ' + (x - 7))
//       x -= 7
//    }

// }

// gul()