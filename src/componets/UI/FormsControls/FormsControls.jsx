import React from "react";
import s from "./Forms.module.css";

const Textarea = ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error
  return (
    <div className={s.form + "" + (hasError ? s.error : '')}>
      <textarea {...input} {...props}></textarea>
      {hasError && <span className={'spanError'}>{meta.error}</span>}
    </div>
  );
};
export default Textarea;
