import React from 'react'
import { connect } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { reduxForm } from 'redux-form'
import { loginThunkCreator, logoutThunkCreator } from '../../redux/authReducer'
import { maxLengthCreator, required } from '../../utils/validators/validators'
import { Input, createField } from '../UI/FormsControls/FormsControls'
import style from './../UI/FormsControls/Forms.module.css'
const maxLength50 = maxLengthCreator(50)

const LoginForm = ({ handleSubmit, error }) => {
	return (
		<form onSubmit={handleSubmit}>
			{createField('Email', 'email', [required], Input)}
			{createField('Password', 'password', [required], Input, {
				type: 'password',
			})}
			{createField(
				null,
				'rememberMe',
				[],
				Input,
				{ type: 'checkbox' },
				'remember me'
			)}

			{error && <div className={style.formSummaryError}>{error}</div>}
			<div>
				<button>Login</button>
			</div>
		</form>
	)
}
const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = props => {
	const onSubmit = formData => {
		props.loginThunkCreator(
			formData.email,
			formData.password,
			formData.rememberMe
		)
	}
	if (props.isAuth) {
		return <Navigate to={'/profile'} />
	}
	return (
		<div>
			<LoginReduxForm onSubmit={onSubmit} />;
		</div>
	)
}

const mapStateToProps = state => ({
	isAuth: state.auth.isAuth,
})
export default connect(mapStateToProps, {
	loginThunkCreator,
	logoutThunkCreator,
})(Login)
