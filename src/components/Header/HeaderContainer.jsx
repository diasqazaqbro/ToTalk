import React from 'react'
import { connect } from 'react-redux'
import {
	getAuthThunkCreator,
	logoutThunkCreator,
} from '../../redux/authReducer'
import Header from './Header'

class HeaderContainer extends React.Component {
	componentDidMount() {
		this.props.getAuthThunkCreator()
	}
	render() {
		return <Header {...this.props} />
	}
}
const mapStateToProps = state => ({
	isAuth: state.auth.isAuth,
	login: state.auth.login,
	profile: state.profilePage.profile,
})
export default connect(mapStateToProps, {
	getAuthThunkCreator,
	logoutThunkCreator,
})(HeaderContainer)
