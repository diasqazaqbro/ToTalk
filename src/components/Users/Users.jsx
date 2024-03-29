import React from 'react'
import { NavLink } from 'react-router-dom'
import Paginator from '../UI/Paginator/Paginator'
import s from './Users.module.css'
const Users = props => {
	debugger
	return (
		<div className={s.main}>
			<div className={s.count}>
				Все пользователи: <span className={s.counter}>{props.totalCount}</span>
			</div>
			<div className={s.pages}>
				<Paginator
					currentPage={props.currentPage}
					onPageChanged={props.onPageChanged}
					totalItemsCount={props.totalCount}
					pageSize={props.pageSize}
				/>
			</div>
			<div className={s.list}>
				{props.users.map(u => (
					<div className={s.item}>
						<div className={s.card}>
							<NavLink to={'/profile/' + u.id}>
								{u.photos.small ? (
									<img className={s.img} src={u.photos.small} alt='' />
								) : (
									<img
										className={s.img}
										src='https://avatars.mds.yandex.net/i?id=b0880d8a436d0fa42f04aca0768dfd35-5372116-images-thumbs&n=13'
										alt=''
									/>
								)}
							</NavLink>

							<div className={s.profile}>
								<div className={s.name}>{u.name}</div>
								<div className={s.status}>
									{u.status ? (
										<div>{u.status}</div>
									) : (
										<div className=''>no status</div>
									)}
								</div>
							</div>
						</div>
						<div>
							{u.followed ? (
								<button
									disabled={props.followingInProgress.some(id => id === u.id)}
									onClick={() => {
										props.unfollowThunkCreator(u.id)
									}}
								>
									UnFollow
								</button>
							) : (
								<button
									disabled={props.followingInProgress.some(id => id === u.id)}
									onClick={() => {
										props.followThunkCreator(u.id)
									}}
								>
									Follow
								</button>
							)}
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default Users
