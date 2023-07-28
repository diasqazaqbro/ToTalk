import React from 'react'
import { reduxForm } from 'redux-form'
import { maxLengthCreator } from '../../utils/validators/validators'
import { Input, createField } from '../UI/FormsControls/FormsControls'
const maxLength10 = maxLengthCreator(10)
function EditForm({ handleSubmit, profile, error }) {
	return (
		<form onSubmit={handleSubmit}>
			{createField('full name', 'fullname', [], Input)}
			{error && <div>{error}</div>}
			<button>save</button>
		</form>
	)
}

const EditFormReduxForm = reduxForm({ form: 'edit-profile' })(EditForm)
export default EditFormReduxForm
