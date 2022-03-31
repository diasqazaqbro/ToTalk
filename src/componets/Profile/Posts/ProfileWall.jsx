import React from 'react'
import PostsItem from './PostsItem'
const ProfileWall = (props) => {
   let postsElement = props.posts.map(p => <PostsItem message={p.message} />)
   let newPostElement = React.createRef()
   let addPost = () => {
      let text = newPostElement.current.value
      props.addPost(text)
   }
   let onPostChange = () => {
      let textPost = newPostElement.current.value
      props.updateNewPostText()
   }
   return (
      <div className="profile__wall">
         <div className="profile__stat">
            <div className="profile__name">Joji</div>
            <div className="profile__status">WebDeveloper/FrontEnd/BackEnd/React</div>
         </div>
         <div className="profile__area">
            <textarea value={props.newPost} cols="61" rows="3" wrap='soft' onChange={onPostChange} maxLength={140} accessKey='tab' placeholder='Что у вас нового?' ref={newPostElement} />
            <button type='' onClick={addPost}>Кнопка</button>
         </div>
         <div className="profile__posts">
            {postsElement}
         </div>
      </div>
   )
}

export default ProfileWall;