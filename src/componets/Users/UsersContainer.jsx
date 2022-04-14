import { connect } from "react-redux"
import { followActionCreater, setUsersActionCreate, unfollowActionCreater } from "../../redux/usersReducer"
import Users from './Users'

const mapStateToProps = (state) => {
   return {
      users: state.usersPage.users
   }

}

const mapDispatchToProps = (dispatch) => {
   return {
      follow: (userId) => { dispatch(followActionCreater(userId)) },
      unfollow: (userId) => { dispatch(unfollowActionCreater(userId)) },
      setUsers: (users) => { dispatch(setUsersActionCreate(users)) }
   }
}


export default connect(mapStateToProps, mapDispatchToProps)(Users)