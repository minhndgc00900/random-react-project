import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
	gridContainer: {
		border: '1px solid rgba(91,91,91,0.49)',
		borderRadius: '9px 9px 9px 10px',
		fontFamily: `'Roboto',sans-serif`,
		fontSize: '14px',
		fontWeight: 'normal',
		textDecoration: 'none',
		cursor: 'pointer',
		marginBottom: '15px',
	},
	imgSize: {
		width: '224px',
		height: '172px',
	},
	infoContainer: {
		padding: '10px 20px 0px 20px',
		'& > div': {
			marginTop: '7px',
		},
	},
	customisedLink: {
		backgroundColor: 'initial',
		color: 'rgb(221, 86, 77)',
	},
	bottomInfo: {
		marginTop: '19px',
	},
	dot: {
		padding: '5.8px',
	},
	description: {
		display: 'inline-block',
		width: '30em',
		whiteSpace: 'nowrap',
		overflow: 'hidden !important',
		textOverflow: 'ellipsis',
		// '&:hover': {
		// 	textOverflow: 'clip',
		// 	whiteSpace: 'normal',
		// 	wordBreak: 'break-all',
		// },
	},
})

export default useStyles
