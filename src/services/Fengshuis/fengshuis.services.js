import { requestService } from '../axios.instance'

export const getLists = () => {
	return requestService.getRequest(
		'/articles',
		{},
		requestService.devtoInstance
	)
}
