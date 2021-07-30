import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
	logoContainer: {
		marginTop: '40px',
		marginBottom: '30px !important',
	},
	leftFooterContainer: {
		'& > div': {
			marginBottom: '15px',
		},
	},
	footerContainer: {
		backgroundColor: '#f2f2f2',
		fontFamily: `'Roboto',sans-serif`,
		fontWeight: '500',
		fontSize: '14px',
	},
	imageContainer: {
		margin: '60px 0 60px 0',
		'& > div': {
			'& > img': {
				width: '111px',
				// height: '50px';
			},
		},
	},
})

export default useStyles
