import React from "react"
import './users.css'
import { NavLink } from 'react-router-dom'

const Users = (props) => {
   let pagesCount = props.totalUsersCount / props.pageSize
   let pages = []
   for (let i = 1; i <= pagesCount; i++) {
      pages.push(i)
   }
   return (
      <div div className="users" >
         {
            props.users.map(u => <div key={u.id} className="users__item">
               <span>
                  <NavLink to={"/profile/" + u.id}><img src={u.photos.small != null ? u.photos.small : 'https://cdn-icons-png.flaticon.com/512/16/16480.png'} alt="" className="ava" /></NavLink>
               </span>
               <span>
                  {u.followed
                     ? <button onClick={() => { props.unfollow(u.id) }}>Follow</button>
                     : <button onClick={() => { props.follow(u.id) }}>unFollow</button>}
               </span>
               <span>
                  <span>
                     <div className="div">{u.name}</div>
                     <div className="div">{u.status}</div>
                  </span>
               </span>
            </div>)
         }
         {
            pages.map(p => <span onClick={() => { props.onPageChanged(p) }} className={props.currentPage === p && 'selectedPage'}>{p}</span>)
         }
      </div >
   )
}

export default Users