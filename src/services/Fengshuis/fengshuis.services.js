import { requestService } from '../axios.instance'

export const getLists = (param) => {
	return requestService.getRequest(
		'/articles',
		{},
		requestService.devtoInstance
	)
}
