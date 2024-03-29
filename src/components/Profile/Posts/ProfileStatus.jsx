import React, { useEffect, useState } from 'react'

const ProfileStatus = props => {
	let [editMode, setEditMode] = useState(false)
	let [status, setStatus] = useState(props.status)

	useEffect(() => {
		setStatus(props.status)
	}, [props.status])
	const activeMode = () => {
		setEditMode(true)
	}
	const noActiveMode = () => {
		setEditMode(false)
		props.putStatus(status)
	}
	const onStatusChange = e => {
		setStatus(e.currentTarget.value)
	}
	return (
		<div className='status'>
			{!editMode && <span onDoubleClick={activeMode}>{status || '-----'}</span>}
			{editMode && (
				<span>
					<input
						onChange={onStatusChange}
						onBlur={noActiveMode}
						autoFocus={true}
						value={status}
						className='status'
					/>
				</span>
			)}
		</div>
	)
}

//   componentDidUpdate(prevProps, prevState) {
//     if (prevProps.status !== this.props.status) {
//       this.setState({
//         status: this.props.status
//       })
//     }
//   }

export default ProfileStatus
