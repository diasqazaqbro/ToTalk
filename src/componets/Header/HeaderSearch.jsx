import ico from '../../content/search.svg'
const HeaderSearch = () => {
   return (
      <div className="header__search">
         <form>
            <input type="text" placeholder="Искать здесь..." />
            <button type="submit"><img src={ico} alt="" /></button>
         </form>
      </div>
   )
}

export default HeaderSearch;