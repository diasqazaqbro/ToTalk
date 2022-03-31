import ava from '../../content/ava.jpg'
const HeaderProfile = () => {
   return (
      <div className="header__profile">
         <img className="header__ava" src={ava} alt="" />
         <span className='header__name'>JojiBlog</span>
      </div>
   )
}

export default HeaderProfile;