import React from "react";
import s from './Forms.module.css'

export const Textarea = ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error
  return (
    <div className={s.form + "" + (hasError ? s.error : '')}>
      <textarea {...input} {...props}></textarea>
      {hasError && <span className={s.spanError}>{meta.error}</span>}
    </div>
  );
};


export const InputLogin = ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error
  return (
    <div className={s.form + "" + (hasError ? s.error : '')}>
      <input {...input} {...props}></input>
      {hasError && <span className={s.spanError}>{meta.error}</span>}
    </div>
  );
}



