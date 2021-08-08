import { createSelector } from 'reselect'

const fengShuiSelector = (state) => state.fengshuiStore

export const listItemSelect = createSelector([fengShuiSelector], (items) =>
	items.articles ? items.articles : []
)
