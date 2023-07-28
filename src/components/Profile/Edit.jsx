import { Button, Modal } from 'antd'
import React, { useState } from 'react'
import EditForm from './EditForm'
const Edit = ({ onMainPhotoSelected }) => {
	const [open, setOpen] = useState(false)
	const showModal = () => {
		setOpen(true)
	}
	const handleOk = () => {
		setOpen(false)
	}
	const handleCancel = () => {
		setOpen(false)
	}
	const [open2, setOpen2] = useState(false)
	const showModal2 = () => {
		setOpen2(true)
	}
	const handleOk2 = () => {
		setOpen2(false)
	}
	const handleCancel2 = () => {
		setOpen2(false)
	}

	const handleSubmit = () => {
		alert('submit')
	}

	return (
		<div className='edit'>
			<button onClick={showModal}>Edit Profile</button>
			<button onClick={showModal2}>Edit Photo</button>

			<Modal
				open={open}
				title='Edit Profile'
				onCancel={handleCancel}
				footer={[
					<Button key='submit' type='primary' onClick={handleOk}>
						Закрыть
					</Button>,
					<Button key='submit' type='primary' onClick={handleSubmit}>
						Сохранить
					</Button>,
				]}
			>
				<EditForm />
			</Modal>
			<Modal
				open={open2}
				title='Edit Photo'
				onCancel={handleCancel2}
				footer={[
					<Button key='submit' type='primary' onClick={handleOk2}>
						Закрыть
					</Button>,
				]}
			>
				<input
					className='edit__photo'
					type='file'
					onChange={onMainPhotoSelected}
				/>
			</Modal>
		</div>
	)
}
export default Edit
