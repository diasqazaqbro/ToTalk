import {
	DeploymentUnitOutlined,
	HomeOutlined,
	SmileOutlined,
	TeamOutlined,
	UserOutlined,
} from '@ant-design/icons'
import { Layout, Menu } from 'antd'
import React from 'react'
import { connect } from 'react-redux'
import { NavLink, Route, Routes } from 'react-router-dom'
import './App.css'
import DialogsContainer from './components/Dialogs/DialogsContainer'
import FooterComponent from './components/Footer/FooterComponent'
import HeaderContainer from './components/Header/HeaderContainer'
import Login from './components/Login/Login'
import ProfileContainer from './components/Profile/ProfileContainer'
import Preloader from './components/UI/Preloader/Preloader'
import UsersContainer from './components/Users/UsersContainer'
import { initializeApp } from './redux/appReducer'
const { Content, Sider } = Layout

function getItem(label, key, icon, children) {
	return {
		key,
		icon,
		children,
		label,
	}
}
class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			collapsed: false,
		}
	}
	componentDidMount() {
		this.props.initializeApp()
	}
	items = [
		getItem(<NavLink to='/home'>Главная</NavLink>, '1', <HomeOutlined />),
		getItem(<NavLink to='/profile'>Профиль</NavLink>, '2', <SmileOutlined />),
		getItem('Профиль', 'sub1', <UserOutlined />, [
			getItem(<NavLink to='/dialogs'>Мессенджер</NavLink>, '3'),
			getItem(<NavLink to='/friends'>Друзья</NavLink>, '4'),
			getItem(<NavLink to='/notifiactions'>Уведомления</NavLink>, '5'),
		]),
		getItem(
			<NavLink to='/users'>Все пользователи</NavLink>,
			'9',
			<TeamOutlined />
		),
		getItem('Разработчик', '9', <DeploymentUnitOutlined />),
	]

	render() {
		if (!this.props.initialized) {
			return <Preloader />
		}
		return (
			<Layout
				style={{
					minHeight: '100vh',
				}}
			>
				<Sider collapsed={true}>
					<div
						style={{
							height: 32,
							margin: 16,
							background: 'rgba(255, 255, 255, 0.2)',
						}}
					/>
					<Menu
						theme='dark'
						defaultSelectedKeys={['1']}
						mode='inline'
						items={this.items}
					/>
				</Sider>
				<Layout className='site-layout'>
					<HeaderContainer />
					<Content
						style={{
							margin: '0 16px',
						}}
					>
						<div
							style={{
								padding: 24,
								minHeight: 360,
							}}
						>
							<Routes>
								<Route path='/profile/:userId' element={<ProfileContainer />} />
								<Route exact path='/profile' element={<ProfileContainer />} />
								<Route path='/dialogs' element={<DialogsContainer />} />
								<Route path='/users' element={<UsersContainer />} />
								<Route exact path='/login' element={<Login />} />
							</Routes>
						</div>
					</Content>
					<FooterComponent />
				</Layout>
			</Layout>
		)
	}
}

const mapStateToProps = state => ({
	initialized: state.app.initialized,
})

export default connect(mapStateToProps, { initializeApp })(App)
