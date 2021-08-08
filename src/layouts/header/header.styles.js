import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
	headerContainer: {
		padding: '17px 0px 17px',
		position: 'relative',
	},
	content: {
		marginTop: '100px',
	},
	menuContainer: {
		'& > li': {
			display: 'inline-block',
			marginLeft: '24px',
		},
	},
	btnMenuContainer: {
		float: 'right',
		marginTop: '4px',
		'& > li': {
			display: 'inline-block',
			marginLeft: '10px',
			'& > button': {
				textTransform: 'none',
			},
		},
	},
	fontMenu: {
		fontFamily: `Dan'sDisneyUI !important`,
		fontWeight: 'bold',
		fontSize: '14px',
		lineHeight: '20px',
	},
	brandLogo: {
		cursor: 'pointer',
	},
})

export default useStyles
