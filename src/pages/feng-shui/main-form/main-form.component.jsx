import { Grid } from '@material-ui/core'
import { infoFengshui, titleInfo } from '../../../constants'
import Counter from '../../../layouts/counter/counter'
import useStyles from './main-form.styles'

function MainForm() {
	const classes = useStyles()
	return (
		<>
			<div>
				<Counter
				// value={store.getState()}
				// onIncrement={() => action('INCREMENT')}
				// onDecrement={() => action('DECREMENT')}
				// onIncrementAsync={() => action('INCREMENT_ASYNC')}
				/>
				<div className={classes.container}>
					<Grid className={classes.summaryContainer} container spacing={2}>
						<Grid item xs={2} className={classes.imgSize}>
							<img src='/images/phong-thuy-1 (1).png' alt='Girl in a jacket' />
						</Grid>
						<Grid item xs={8}>
							<div className={classes.title}>{titleInfo}</div>
							<div>{infoFengshui}</div>
						</Grid>
						<Grid item xs={2} className={classes.imgSize}>
							<img src='/images/phong-thuy-2 (1).png' alt='Girl in a jacket' />
						</Grid>
					</Grid>
					<Grid container spacing={1}>
						<Grid item xs={6}>
							<div className={classes.subSummaryContainer}>
								<div className={classes.header}>
									<span className={classes.title}>dasdsd</span>
								</div>
								<div>content</div>
							</div>
						</Grid>
						<Grid item xs={6}>
							<div className={classes.subSummaryContainer}>
								<div className={classes.header}>
									<span className={classes.title}>dasdsd</span>
								</div>
								<div>content</div>
							</div>
						</Grid>
					</Grid>
				</div>
			</div>
		</>
	)
}

export default MainForm
