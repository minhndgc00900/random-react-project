import axios from 'axios'

const HEADERS = {
	'content-type': 'application/json',
}

const axiosInstance = axios.create({
	baseURL: process.env.JWT_ENDPOINT,
})

const get = (
	path = '',
	param = {},
	axiosEndpoint = axiosInstance,
	headers = HEADERS
) => {
	axiosEndpoint
		.get(path, { headers, param })
		.then((res) => res.data)
		.catch((err) => Promise.reject(err.response ? err.response.data : err))
}

const post = (
	path = '',
	body = {},
	axiosEndpoint = axiosInstance,
	headers = HEADERS
) => {
	axiosEndpoint
		.post(path, body, { headers })
		.then((res) => res.data)
		.catch((err) => Promise.reject(err.response ? err.response.data : err))
}

export { get, post }
