import React from "react"
import { connect } from "react-redux"
import { followActionCreater, setUsersActionCreate, unfollowActionCreater, setCurrentPageActionCreate, setTotalUsersCountActionCreate, setIsFetchingActionCreate } from "../../redux/usersReducer"
import Users from './Users'
import loading from '../../content/loading.svg'
import * as axios from 'axios'

class UsersAPI extends React.Component {
   componentDidMount() {
      this.props.setIsFetching(true)
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
         .then(response => {
            this.props.setIsFetching(false)
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
         })
   }

   onPageChanged = (pageNumber) => {
      this.props.setCurrentPage(pageNumber)
      this.props.setIsFetching(true)
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
         .then(response => {
            this.props.setIsFetching(false)
            this.props.setUsers(response.data.items)
         })
   }
   render() {

      return <>
         {this.props.isFetching ? <img src={loading} /> : null}
         {this.props.isFetching === false ? <Users
            pageSize={this.props.pageSize}
            totalUsersCount={this.props.totalUsersCount}
            currentPage={this.props.currentPage}
            onPageChanged={this.onPageChanged}
            users={this.props.users}
            follow={this.props.follow}
            unfollow={this.props.unfollow}


         /> : null}

      </>
   }
}

const mapStateToProps = (state) => {
   return {
      users: state.usersPage.users,
      pageSize: state.usersPage.pageSize,
      totalUsersCount: state.usersPage.totalUsersCount,
      currentPage: state.usersPage.currentPage,
      isFetching: state.usersPage.isFetching
   }

}

const mapDispatchToProps = (dispatch) => {
   return {
      follow: (userId) => { dispatch(followActionCreater(userId)) },
      unfollow: (userId) => { dispatch(unfollowActionCreater(userId)) },
      setUsers: (users) => { dispatch(setUsersActionCreate(users)) },
      setCurrentPage: (pageNumber) => { dispatch(setCurrentPageActionCreate(pageNumber)) },
      setTotalUsersCount: (totalCount) => { dispatch(setTotalUsersCountActionCreate(totalCount)) },
      setIsFetching: (isFetching) => { dispatch(setIsFetchingActionCreate(isFetching)) }
   }
}


export default connect(mapStateToProps, mapDispatchToProps)(UsersAPI)