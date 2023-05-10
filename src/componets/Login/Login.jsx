import React from "react";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, requiredField } from "../../utils/validators";
import { InputLogin } from "../UI/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10);

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        validate={[requiredField, maxLength10]}
        component={InputLogin}
        name={"login"}
      />
      <Field
        validate={[requiredField, maxLength10]}
        component={InputLogin}
        name={"password"}
      />
      <Field
        validate={[requiredField, maxLength10]}
        component={"input"}
        type={"checkbox"}
        name={"rememberMe"}
      />
      <button>Submit</button>
    </form>
  );
};
const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

const Login = () => {
  const onSubmit = (formData) => {
    console.log(formData);
  };
  return <LoginReduxForm onSubmit={onSubmit} />;
};
export default Login;
