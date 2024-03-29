import {
	FacebookFilled,
	GithubFilled,
	InstagramFilled,
	TwitterSquareFilled,
	YoutubeFilled,
} from '@ant-design/icons'
import { Col } from 'antd'
import React from 'react'

const ProfileLink = props => {
	return (
		<Col className='links' span={8}>
			<div className='profile__link'>
				<FacebookFilled style={{ fontSize: '25px' }} />
				<span> Facebook:</span>
				<span>{props.contacts.facebook} </span>
			</div>

			<div className='profile__link'>
				<TwitterSquareFilled style={{ fontSize: '25px' }} />
				<span> Twitter:</span>
				<span>{props.contacts.twitter} </span>
			</div>
			<div className='profile__link'>
				<InstagramFilled style={{ fontSize: '25px' }} />
				<span> Instagram:</span>
				<span>{props.contacts.instagram} </span>
			</div>
			<div className='profile__link'>
				<YoutubeFilled style={{ fontSize: '25px' }} />
				<span> Youtube:</span>
				<span>{props.contacts.youtube} </span>
			</div>
			<div className='profile__link'>
				<GithubFilled style={{ fontSize: '25px' }} />
				<span> Github:</span>
				<span>{props.contacts.github} </span>
			</div>
		</Col>
	)
}

export default ProfileLink
