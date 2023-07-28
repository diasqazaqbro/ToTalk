import { Col, Image, Row } from 'antd'
import Preloader from '../UI/Preloader/Preloader'
import Edit from './Edit'
import ProfileStatus from './Posts/ProfileStatus'
import ProfileWallContainer from './Posts/ProfileWallContainer'
import './profile.sass'

const Profile = props => {
	const onMainPhotoSelected = e => {
		if (e.target.files.length) {
			props.savePhotoThunkCreator(e.target.files[0])
		}
	}
	const photos = () => {
		if (props.profile.photos.large === null) {
			return (
				<div className='avatar__box'>
					<Image
						className='avatar'
						src={
							'https://avatars.mds.yandex.net/i?id=b0880d8a436d0fa42f04aca0768dfd35-5372116-images-thumbs&n=13'
						}
					/>
				</div>
			)
		} else {
			return (
				<div className='avatar__box'>
					<Image
						className='avatar'
						width={350}
						src={props.profile.photos.large}
					/>
				</div>
			)
		}
	}
	if (!props.profile) {
		return <Preloader />
	}

	return (
		<div className='profile'>
			<div className='box'>
				<Row>
					<Col flex={0.5}>{photos()}</Col>
					<Col flex={4.5}>
						<div className='name'>{props.profile.fullName}</div>
						<ProfileStatus putStatus={props.putStatus} status={props.status} />
						<div className='job'>Looking job</div>
						<div className='desc'>Description</div>
						{props.isOwner && (
							<Edit onMainPhotoSelected={onMainPhotoSelected} />
						)}
					</Col>
				</Row>
			</div>
			<ProfileWallContainer props={props.profile} />
		</div>
	)
}

export default Profile
