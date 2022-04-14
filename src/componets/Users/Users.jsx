import * as axios from 'axios'
import './users.css'
const Users = (props) => {

   if (props.users.length === 0) {
      axios.get('https://social-network.samuraijs.com/api/1.0/users')
         .then(response => {
            props.setUsers(response.data.items)
         })

   }

   return (
      <div div className="users" >
         {
            props.users.map(u => <div key={u.id} className="users__item">
               <span>
                  <div><img src={u.photos.small != null ? u.photos.small : 'https://cdn-icons-png.flaticon.com/512/16/16480.png'} alt="" className="ava" /></div>
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
                  <span>
                     {/* <div>{u.location.country}</div>
                     <div>{u.location.city}</div> */}
                  </span>
               </span>
            </div>)
         }
      </div >
   )
}

export default Users