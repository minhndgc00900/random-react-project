import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
	dialogContainer: {
		fontFamily: 'Roboto,Tahoma !important',
		lineHeight: '20px',
	},
	loginTitle: {
		fontWeight: 'bold',
		fontSize: '24px',
		color: '#055699',
		margin: '30px 0',
		textAlign: 'center',
		textTransform: 'uppercase',
	},
	formContainer: {
		'& .MuiTextField-root': {
			margin: theme.spacing(1),
			width: '25ch',
		},
	},
	btnLogin: {
		margin: theme.spacing(1),
		backgroundColor: '#004e7f',
	},
	textfieldLayout: {
		marginBottom: '1.5em',
		'& > div': {
			paddingLeft: '10px',
		},
	},
	textfieldContainer: {},
	dialog: {
		width: '30em',
	},
	root: {
		width: '100%',
		paddingLeft: '2em',
		paddingRight: '2em',
	},
	btnContainer: {
		textAlign: 'center',
	},
}))

export default useStyles
