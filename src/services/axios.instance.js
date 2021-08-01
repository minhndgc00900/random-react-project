import axios from 'axios'

const HEADERS = {
	'content-type': 'application/json',
}

const axiosInstance = axios.create({
	baseURL: process.env.REACT_APP_JWT_ENDPOINT,
})

const getRequest = (
	path = '',
	param = {},
	axiosEndpoint = axiosInstance,
	headers = HEADERS
) => {
	return axiosEndpoint
		.get(path, { headers, param })
		.then((res) => res)
		.catch((err) => Promise.reject(err.response ? err.response.data : err))
}

const postRequest = (
	path = '',
	body = {},
	axiosEndpoint = axiosInstance,
	headers = HEADERS
) => {
	const request = axiosEndpoint
		.post(path, body, { headers })
		.then((res) => res.data)
		.catch((err) => Promise.reject(err.response ? err.response.data : err))
	return request
}

export const requestService = { getRequest, postRequest }
