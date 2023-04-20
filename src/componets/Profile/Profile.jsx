import ava from '../../content/ava.jpg'
import back from '../../content/back.jpeg'
import ProfileWallContainer from './Posts/ProfileWallContainer';
import './profile.css'
const Profile = () => {
   return (
      <div className='profile'>
         <img className="profile__background" src={back} />
         <div className="container">
            <div className="profile__grid">
               <div className="profile__about">
                  <img src={ava} alt="" className="profile__avatar" />
                  <div className="profile__info">
                     <div className="profile__nameid">@itsJoji</div>
                  </div>
               </div>
               <ProfileWallContainer />
            </div>
         </div>
      </div>
   )
}

export default Profile;

