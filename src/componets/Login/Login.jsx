import React from "react";
import { Field, reduxForm } from "redux-form";

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field component={"input"} name={"login"} />
      <Field component={"input"} name={"password"} />
      <Field component={"input"} type={"checkbox"} name={"rememberMe"} />
      <button>Submit</button>
    </form>
  );
};
const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

const Login = () => {
    const onSubmit = (formData ) => {
        console.log(formData);
    }
  return <LoginReduxForm onSubmit={onSubmit} />;
};
export default Login;
