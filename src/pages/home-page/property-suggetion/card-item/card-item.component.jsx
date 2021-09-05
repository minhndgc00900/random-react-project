import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import './card-item.styles.scss'

function CardItem({ item }) {
	const onHandleLongTitle = (input) => {
		return input.length > 50 ? `${input.substring(0, 50)}...` : input
	}

	return (
		<Card className='root-main'>
			<CardActionArea className='card-action-area'>
				<img className='media' src={item.image} alt='Contemplative Reptile' />
				<CardContent className='card-content'>
					<Typography
						variant='body2'
						color='textSecondary'
						className='title-card'
						component='p'
					>
						{onHandleLongTitle(item.title)}
					</Typography>
					<div className='pt-2'>
						<span className='pr-m2'>
							{item.price === 'negotiable' ? 'Giá thỏa thuận' : item.price}
						</span>
						<span className='dot'>.</span>
						<span className='pr-m2'>{item.area}</span>
					</div>
					<div className='pt-2 product-address'>
						<a href='*' title={item.address}>
							{item.address}
						</a>
						,
						<a href='*' title={item.city}>
							{item.city}
						</a>
					</div>
				</CardContent>
			</CardActionArea>
		</Card>
	)
}

export default CardItem
