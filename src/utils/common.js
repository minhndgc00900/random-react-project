export const getUser = () => {
	const userStr = sessionStorage.getItem('user')
	if (userStr) {
		return JSON.parse(userStr)
	}
	return null
}

// set the token and user from the session storage
export const setUserSession = (token, user) => {
	sessionStorage.setItem('token', token)
	sessionStorage.setItem('user', JSON.stringify(user))
}
