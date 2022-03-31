import HeaderProfile from './HeaderProfile';
import HeaderSearch from './HeaderSearch';
import './header.css'
const Header = () => {
   return (
      <header className='header'>
         <div className="container">
            <div className="header__header">
               <div className="header__logo">ToTalk</div>
               <HeaderSearch />
               <HeaderProfile />
            </div>
         </div>
      </header >
   )
}
export default Header;          