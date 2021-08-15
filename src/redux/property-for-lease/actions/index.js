import { GET_ITEM_LIST_SAGA } from '../action-types'

export const getItemList = (param) => {
	return {
		type: GET_ITEM_LIST_SAGA,
		payload: param,
	}
	// return {
	// 	type: GET_ITEM_LIST_SAGA,
	// }
}
