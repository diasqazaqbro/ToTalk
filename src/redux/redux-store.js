import { combineReducers, createStore } from 'redux'
import dialogsReducer from './dialogsReducer'
import navbarReducer from './navbarReducer'
import profileReducer from './profileReducer'
import usersReducer from './usersReducer'
import authReducer from './authReducer'

let reducers = combineReducers({
   profilePage: profileReducer,
   messagesPage: dialogsReducer,
   navBar: navbarReducer,
   usersPage: usersReducer,
   auth: authReducer
})

let store = createStore(reducers)

window.store = store

export default store