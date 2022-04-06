import { combineReducers, createStore } from 'redux'
import dialogsReducer from './dialogsReducer'
import navbarReducer from './navbarReducer'
import profileReducer from './profileReducer'

let reducers = combineReducers({
   profilePage: profileReducer,
   messagesPage: dialogsReducer,
   navBar: navbarReducer
})

let store = createStore(reducers)

export default store