import { connect } from "react-redux";
import {
  follow,
  setUsers,
  unfollow,
  setCurrnetPage,
  setTotalCount,
  toggleIsFetching,
  toggleFollowingInProgress
} from "../../redux/usersReducer";
import React from "react";
import Users from "./Users";
import Preloader from "../UI/Preloader/Preloader";
import { getUsers } from "../../api/api";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);
    getUsers(this.props.currentPage, this.props.pageSize).then(data => {
      this.props.toggleIsFetching(false);
      this.props.setUsers(data.items);
      this.props.setTotalCount(data.totalCount);
    })
  }

  onPageChanged = (p) => {
    this.props.toggleIsFetching(true);
    this.props.setCurrnetPage(p);
    getUsers(p, this.props.pageSize).then(data => {
      this.props.setUsers(data.items);
      this.props.toggleIsFetching(false);
    });
  };

  render() {
    return (
      <>
        {this.props.isFetching ? (
          <Preloader />
        ) : (
          <Users
            totalCount={this.props.totalCount}
            pageSize={this.props.pageSize}
            onPageChanged={this.onPageChanged}
            currentPage={this.props.currentPage}
            users={this.props.users}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            followingInProgress={this.props.followingInProgress}
            toggleFollowingInProgress={this.props.toggleFollowingInProgress}
          />
        )}
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalCount: state.usersPage.totalCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress
  };
};

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrnetPage,
  setTotalCount,
  toggleIsFetching,
  toggleFollowingInProgress
})(UsersContainer);
