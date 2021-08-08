import { requestService } from '../axios.instance'
import { requestUrl } from '../../configs/request-urls'

export const signIn = (body) => {
	return requestService.postRequest(requestUrl.signIn, body)
}
