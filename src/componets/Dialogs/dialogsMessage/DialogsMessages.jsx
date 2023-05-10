import DialogItem from "./DialogItem";
import React from "react";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, requiredField } from "../../../utils/validators";
import { Textarea } from "../../UI/FormsControls/FormsControls";
const maxLength10 = maxLengthCreator(10);

const DialogsForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        validate={[requiredField, maxLength10]}
        name={"textarea"}
        component={Textarea}
      />
      <button>Отправить</button>
    </form>
  );
};

const DialogsReduxForm = reduxForm({ form: "message" })(DialogsForm);

const DialogsMessages = (props) => {
  let messageElement = props.message.map((m) => (
    <DialogItem message={m.message} />
  ));
  let addMessage = (values) => {
    props.onAddMessage(values.textarea);
  };
  return (
    <div>
      <div className="dialog__messages">{messageElement}</div>;
      <DialogsReduxForm onSubmit={addMessage} />;
    </div>
  );
};

export default DialogsMessages;
