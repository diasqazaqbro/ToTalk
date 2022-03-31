import './navbar.css'
import chat from '../../content/chat.svg'
import friends from '../../content/friends.svg'
import home from '../../content/home.svg'
import notif from '../../content/notif.svg'
import profile from '../../content/profile.svg'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
   return (
      <div className="navbar">
         <nav className="nav">
            <NavLink to="/home" className="nav__link"><img src={home} alt="" />Главная</NavLink>
            <NavLink to="/dialogs" className="nav__link"><img src={chat} alt="" />Мессенджер</NavLink>
            <NavLink to="/friends" className="nav__link"><img src={friends} alt="" />Друзья</NavLink>
            <NavLink to="/notifiactions" className="nav__link"><img src={notif} alt="" />Уведомления</NavLink>
            <NavLink to="/profile" className="nav__link"><img src={profile} alt="" />Профиль</NavLink>
         </nav>
      </div>
   )
}

export default NavBar;