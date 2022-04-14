import { combineReducers, createStore } from 'redux'
import dialogsReducer from './dialogsReducer'
import navbarReducer from './navbarReducer'
import profileReducer from './profileReducer'
import usersReducer from './usersReducer'

let reducers = combineReducers({
   profilePage: profileReducer,
   messagesPage: dialogsReducer,
   navBar: navbarReducer,
   usersPage: usersReducer
})

let store = createStore(reducers)

export default store