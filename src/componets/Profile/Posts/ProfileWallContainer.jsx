import React from 'react'
import { updateNewPostTextActionCreator, addPostActionCreator } from '../../../redux/profileReducer'
import ProfileWall from './ProfileWall'

const ProfileWallContainer = (props) => {
   let state = props.store.getState()


   let addPost = () => {
      props.store.dispatch(addPostActionCreator())
   }
   let onPostChange = (text) => {
      props.store.dispatch(updateNewPostTextActionCreator(text))
   }

   return (<ProfileWall posts={state.profilePage.posts} newPost={state.profilePage.newPostText}
      onAddPost={addPost} updateNewPostText={onPostChange} />)
}

export default ProfileWallContainer;