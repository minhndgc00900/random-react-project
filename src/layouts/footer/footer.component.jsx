import React from 'react'
import PropTypes from 'prop-types'
import useStyles from './footer.styles'
import { Container, Grid } from '@material-ui/core'
import { ReactComponent as ReactLogoGrey } from 'public/images/f-logo-old-2.svg'

function Footer(props) {
	const classes = useStyles()
	//'
	return (
		<div className={classes.footerContainer}>
			<Container maxWidth='lg'>
				<Grid container spacing={2}>
					<Grid item xs={4} className={classes.leftFooterContainer}>
						<div className={classes.logoContainer}>
							<ReactLogoGrey />
						</div>
						<div>
							<span>CÔNG TY CỔ PHẦN PROPERTYGURU VIỆT NAM</span>
						</div>
						<div>
							<span>
								Tầng 31, Keangnam Hanoi Landmark, Phạm Hùng, Nam Từ Liêm, Hà Nội
							</span>
						</div>
						<div>
							<span>(024) 3562 5939 - (024) 3562 5940</span>
						</div>
						<Grid className={classes.imageContainer} container>
							<Grid item xs={5}>
								<img alt='google' src={'/images/google-play.png'} />
							</Grid>
							<Grid item xs={5}>
								<img alt='apple' src={'/images/app_store.png'} />
							</Grid>
						</Grid>
					</Grid>
					<Grid item xs={7}></Grid>
				</Grid>
			</Container>
		</div>
	)
}

Footer.propTypes = {}

export default Footer
