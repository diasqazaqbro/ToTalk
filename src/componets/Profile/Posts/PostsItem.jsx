import ava from '../../../content/ava.jpg'
const PostsItem = (props) => {
   return (
      <div className="profile__post-item">
         <div className="post__info">
            <img src={ava} alt="" className="post__ava" />
            <div className="post__stat">
               <div className="post__name">diasqazaqbro</div>
               <div className="post__line">запостил пост ??? минут назад</div>
               <div className="post__item">
                  <p>{props.message}</p>
               </div>
            </div>

         </div>
      </div>
   )
}

export default PostsItem;