import { createSelector } from 'reselect'

const counterSelector = (state) => state.counterStore

const currentCounterState = createSelector(counterSelector, (number) =>
	number.counter ? number.counter : 0
)

export { currentCounterState }
