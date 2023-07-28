import axios from 'axios'
axios.defaults.withCredentials = true

const instance = axios.create({
	withCredentials: true,
	headers: {
		'API-KEY': '4a415add-87af-4e15-8373-1f7a1706053b',
	},
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
})
export const getUsers = (currentPage, pageSize) => {
	return instance
		.get(`users?page=${currentPage}&count=${pageSize}`)
		.then(response => response.data)
}

export const deleteFollow = userId => {
	return instance.delete('follow/' + userId)
}

export const postFollow = userId => {
	return instance.post(`follow/` + userId)
}

export const getAuth = () => {
	return instance.get(`auth/me`)
}

export const login = (email, password, rememberMe = false) => {
	return instance.post(`auth/login`, { email, password, rememberMe })
}
export const logout = (email, password, rememberMe = false) => {
	return instance.delete(`auth/login`)
}
export const getProfile = userId => {
	return instance.get(`profile/` + userId)
}
export const getStatus = userId => {
	return instance.get(`profile/status/` + userId)
}
export const putStatus = status => {
	return instance.put(`profile/status`, { status: status })
}
// export const putProfile = (status) => {
//   return instance.put(`profile/status`, { status: status });
// };
export const putPhoto = photoFile => {
	let formData = new FormData()
	formData.append('image', photoFile)
	return instance.put(`profile/photo`, formData, {
		headers: {
			'Content-Type': 'multipart/form-data',
		},
	})
}
