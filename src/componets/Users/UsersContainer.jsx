import { connect } from "react-redux";
import {
  follow,
  unfollow,
  setCurrnetPage,
  toggleFollowingInProgress,
  getUsersThunkCreator,
  followThunkCreator,
  unfollowThunkCreator
} from "../../redux/usersReducer";
import React from "react";
import Users from "./Users";
import Preloader from "../UI/Preloader/Preloader";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsersThunkCreator(
      this.props.currentPage,
      this.props.pageSize
    );
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrnetPage(pageNumber);
    this.props.getUsersThunkCreator(pageNumber, this.props.pageSize);
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
            unfollowThunkCreator={this.props.unfollowThunkCreator}
            followThunkCreator={this.props.followThunkCreator}
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
    followingInProgress: state.usersPage.followingInProgress,
  };
};

let withRedirect = withAuthRedirect(UsersContainer)
export default connect(mapStateToProps, {
  follow,
  unfollow,
  setCurrnetPage,
  toggleFollowingInProgress,
  getUsersThunkCreator,
  followThunkCreator,
  unfollowThunkCreator
})(withRedirect);
