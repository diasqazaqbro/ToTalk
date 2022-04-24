import HeaderProfile from './HeaderProfile';
import HeaderSearch from './HeaderSearch';
import './header.css'
import { NavLink } from 'react-router-dom'
const Header = (props) => {
   return (
      <header className='header'>
         <div className="container">
            <div className="header__header">
               <div className="header__logo">ToTalk</div>
               <HeaderSearch />
               <div className="login__block">

                  {props.isAuth ? <HeaderProfile />
                     : <NavLink to={'/login'}>Login</NavLink>}
               </div>
            </div>
         </div>

      </header >
   )
}
export default Header;          