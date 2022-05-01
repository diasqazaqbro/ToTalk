import React from "react"
import './users.css'
import { NavLink } from 'react-router-dom'
import axios from "axios"

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
                     ? <button onClick={() => {
                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                           withCredentials: true,
                           headers: {
                              'API-KEY': '4a415add-87af-4e15-8373-1f7a1706053b'
                           }
                        })
                           .then(response => {
                              if (response.data.resultCode == 0) {
                                 props.unfollow(u.id)
                              }
                           })
                     }}>UnFollow</button>
                     : <button onClick={() => {
                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                           withCredentials: true,
                           headers: {
                              'API-KEY': '4a415add-87af-4e15-8373-1f7a1706053b'
                           }
                        })
                           .then(response => {
                              if (response.data.resultCode == 0) {
                                 props.follow(u.id)
                              }
                           })
                     }}>Follow</button>}
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