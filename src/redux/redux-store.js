import { applyMiddleware, combineReducers, createStore } from 'redux'
import dialogsReducer from './dialogsReducer'
import navbarReducer from './navbarReducer'
import profileReducer from './profileReducer'
import usersReducer from './usersReducer'
import authReducer from './authReducer'
import thunkMiddleware from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'
import appReducer from './appReducer'

let reducers = combineReducers({
   profilePage: profileReducer,
   messagesPage: dialogsReducer,
   navBar: navbarReducer,
   usersPage: usersReducer,
   auth: authReducer,
   app: appReducer,
   form: formReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store

export default store