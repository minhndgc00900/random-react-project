import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
	container: {
		marginBottom: '15px',
		border: '1px solid #d2b972',
		borderRadius: '4px',
		padding: '15px 7px 7px 7px',
		color: '#000',
	},
	summaryContainer: {
		paddingBottom: '15px',
	},
	subSummaryContainer: {
		marginBottom: '15px',
		border: '1px solid #d2b972',
		borderRadius: '4px',
		// padding: '15px 7px 7px 7px',
		color: '#000',
	},
	title: {
		color: 'rgb(114, 192, 250)',
		textTransform: 'uppercase',
		fontWeight: 'bold',
		fontSize: '14px',
		paddingBottom: '5px',
		display: 'block',
	},
	imgSize: {
		paddingTop: '20px',
	},
	header: {
		background: '#e8d49a',
		lineHeight: '35px',
		padding: '0 10px',
	},
})

export default useStyles
