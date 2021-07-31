import { get, post } from '../axios.instance'
import { requestUrl } from '../../configs/request-urls'

export const signIn = (body) => {
	post(requestUrl.signIn, body).then((res) => console.log('login', res))
}
