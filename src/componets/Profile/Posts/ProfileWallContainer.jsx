import { connect } from 'react-redux'
import { updateNewPostTextActionCreator, addPostActionCreator } from '../../../redux/profileReducer'
import ProfileWall from './ProfileWall'




const mapStateToProps = (state) => {
   return {
      posts: state.profilePage.posts,
      newPost: state.profilePage.newPostText
   }

}

const mapDispatchToProps = (dispatch) => {
   return {
      onAddPost: () => { dispatch(addPostActionCreator()) },
      updateNewPostText: (text) => { dispatch(updateNewPostTextActionCreator(text)) }
   }
}

const ProfileWallContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileWall)



export default ProfileWallContainer;