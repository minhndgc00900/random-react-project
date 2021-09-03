import { createSelector } from 'reselect'

const propertyForLeaseSelector = (state) => state.propertyForLeaseStore

export const itemListState = createSelector(
	propertyForLeaseSelector,
	(stateParent) => (stateParent ? stateParent.itemList : [])
)
