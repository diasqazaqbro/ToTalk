import React from "react";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, requiredField } from "../../utils/validators";
import { InputLogin } from "../UI/FormsControls/FormsControls";
import {connect} from 'react-redux'
import {loginThunkCreator, logoutThunkCreator} from '../../redux/authReducer'
const maxLength50 = maxLengthCreator(50);

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        validate={[requiredField, maxLength50]}
        component={InputLogin}
        name={"email"}
      />
      <Field
        validate={[requiredField, maxLength50]}
        component={InputLogin}
        name={"password"}
      />
      <Field
        component={"input"}
        type={"checkbox"}
        name={"rememberMe"}
      />
      <button>Submit</button>
    </form>
  );
};
const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    props.loginThunkCreator(formData.email, formData.password, formData.rememberMe)
  };
  return <LoginReduxForm onSubmit={onSubmit} />;
};
export default connect(null, {loginThunkCreator, logoutThunkCreator})(Login);
