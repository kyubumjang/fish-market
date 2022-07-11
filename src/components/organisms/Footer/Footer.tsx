import { Box, Container, Link, Typography } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Copyright = () => {
	return (
		<Typography variant='body2' color='text.secondary'>
			{'Copyright © '}
			<Link color='inherit' href='https://mui.com/'>
				항구
			</Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	);
};

const Footer = () => {
	return (
		<Box
			component='footer'
			sx={{
				py: 3,
				px: 2,
				mt: 'auto',
				backgroundColor: (theme) =>
					theme.palette.mode === 'light'
						? theme.palette.grey[200]
						: theme.palette.grey[800],
			}}
		>
			<Container maxWidth='sm'>
				<Box>
					<Typography variant='body2'>
						'항구'는 수산시장에서 더 나은 경험을 제공하기 위해 운영하는 수산물
						종합 정보 사이트입니다.
					</Typography>
					<Copyright />
				</Box>
				<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
					<Link href='https://www.facebook.com/kyubumJ/'>
						<FacebookIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
					</Link>
					<Link href='https://www.instagram.com/kyubum_j/'>
						<InstagramIcon
							sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}
						/>
					</Link>
					<Link href='https://www.linkedin.com/in/kyubumjang/'>
						<LinkedInIcon
							sx={{
								display: { xs: 'none', md: 'flex' },
								mr: 1,
							}}
						/>
					</Link>
					<Link href='https://github.com/kyubumJang'>
						<GitHubIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
					</Link>
				</Box>
			</Container>
		</Box>
	);
};

export default Footer;
