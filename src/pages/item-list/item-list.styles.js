import { makeStyles } from '@material-ui/core'

const useStyles = (theme) =>
	makeStyles({
		root: {
			textAlign: 'center',
			paddingTop: theme.spacing.unit * 20,
		},
	})

export default useStyles
