import { Container, Grid, Typography } from '@mui/material';
import Youtube from 'react-youtube';

const YoutubePage = () => {
	// 서버에 저장되어 있는 유투브 비디오 정보를 사용하기 위한 커스텀 훅
	//TODO: iframe으로 유투브 플레이어 바꾸기, jsx 추상화
	const videoId = 'MSwEeP5slto';

	return (
		<Container maxWidth='xl'>
			<Grid container spacing={2}>
				<Grid item md={12}>
					<Typography component='h1' variant='h4' color='inherit' gutterBottom>
						봐두면 좋은 영상
					</Typography>
				</Grid>
				<Grid item md={6}>
					<Youtube
						videoId={videoId}
						opts={{
							width: '560',
							height: '315',
						}}
					/>
				</Grid>
				<Grid item md={6}></Grid>
			</Grid>
			<Grid container spacing={2}>
				<Grid item md={12}>
					<Typography variant='h5' color='inherit' paragraph>
						수산 시장 탐방
					</Typography>
				</Grid>
				<Grid item md={6}>
					<Youtube
						videoId='syGFlp0gafg'
						opts={{
							width: '560',
							height: '315',
						}}
					/>
				</Grid>
				<Grid item md={6}>
					<Youtube
						videoId='TmbjlniXoJY'
						opts={{
							width: '560',
							height: '315',
						}}
					/>
				</Grid>
			</Grid>
		</Container>
	);
};

export default YoutubePage;
