import { makeStyles } from '@material-ui/core'
import { deepOrange } from '@material-ui/core/colors'

const useStyles = makeStyles((theme) => ({
	btnUser: {},
	avatar: {
		color: theme.palette.getContrastText(deepOrange[500]),
		backgroundColor: deepOrange[500],
		marginRight: '15px',
	},
}))

export default useStyles
