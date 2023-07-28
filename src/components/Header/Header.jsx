import { LoginOutlined, LogoutOutlined, UserOutlined } from '@ant-design/icons'
import { Avatar, Button } from 'antd'
import { NavLink } from 'react-router-dom'
import './header.sass'
const Header = props => {
	console.log(props)
	return (
		<header className='header'>
			<div className='container'>
				<div className='inner'>
					<div className='logo'>ToTalk</div>
					{props.isAuth ? (
						<div>
							{props.profile === null ? (
								''
							) : props.profile.photos.large ? (
								<Avatar size={'32'} src={props.profile.photos.large} />
							) : (
								<Avatar size={32} icon={<UserOutlined />} />
							)}

							<span className='name'>{props.login}</span>
							<span onClick={props.logoutThunkCreator}>
								<Button type='text'>
									| <LogoutOutlined />
									Logout
								</Button>
							</span>
						</div>
					) : (
						<NavLink to='/login'>
							<Button type='text'>
								<LoginOutlined />
								Login
							</Button>
						</NavLink>
					)}
				</div>
			</div>
		</header>
	)
}
export default Header
