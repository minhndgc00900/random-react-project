import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
	tbxKeyword: {
		'& > div': {
			width: ' 14.2em',
			height: '2em',
			'& > input': {
				fontSize: '13px',
			},
		},
	},
	tbxChoice: {
		'& > div': {
			width: ' 10em',
			height: '2em',
			'& > select': {
				fontSize: '13px',
			},
		},
	},
})

export default useStyles
