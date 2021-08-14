function Counter(props) {
	const { value, onIncrement, onDecrement, onIncrementAsync } = props
	return (
		<div>
			<button onClick={onIncrementAsync}>Increment after 1 second</button>{' '}
			<button onClick={onIncrement}>Increment</button>{' '}
			<button onClick={onDecrement}>Decrement</button>
			<hr />
			<div>Clicked: {value} times</div>
		</div>
	)
}

export default Counter
