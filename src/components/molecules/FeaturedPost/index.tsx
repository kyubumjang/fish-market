import {
	Card,
	CardActionArea,
	CardContent,
	CardMedia,
	Grid,
	Typography,
} from '@mui/material';

interface FeaturedPostProps {
	post: {
		date: string;
		description: string;
		image: string;
		imageLabel: string;
		title: string;
	};
}

export default function FeaturedPost(props: FeaturedPostProps) {
	const { post } = props;

	return (
		<Grid item xs={12} md={6}>
			<CardActionArea component='a' href='#'>
				<Card sx={{ display: 'flex' }}>
					<CardContent sx={{ flex: 1 }}>
						<Typography component='h2' variant='h5'>
							{post.title}
						</Typography>
						<Typography variant='subtitle1' color='text.secondary'>
							{post.date}
						</Typography>
						<Typography variant='subtitle1' paragraph>
							{post.description}
						</Typography>
						<Typography variant='subtitle1' color='primary'>
							포스트 읽기
						</Typography>
					</CardContent>
					<CardMedia
						component='img'
						sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
						image={post.image}
						alt={post.imageLabel}
					/>
				</Card>
			</CardActionArea>
		</Grid>
	);
}
