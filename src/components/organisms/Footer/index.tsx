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
				<Typography variant='body2'>
					문의사항이 있을 시 아이콘을 눌러 연락주세요.
				</Typography>
				<Copyright />
				<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
					<Link href='https://www.facebook.com/kyubumJ/'>
						<FacebookIcon
							color='inherit'
							sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}
						/>
					</Link>
					<Link href='https://www.instagram.com/kyubum_j/'>
						<InstagramIcon
							color='primary'
							sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}
						/>
					</Link>
					<Link href='https://www.linkedin.com/in/kyubumjang/'>
						<LinkedInIcon
							color='primary'
							sx={{
								display: { xs: 'none', md: 'flex' },
								mr: 1,
							}}
						/>
					</Link>
					<Link href='https://github.com/kyubumJang'>
						<GitHubIcon
							color='primary'
							sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}
						/>
					</Link>
				</Box>
			</Container>
		</Box>
	);
};

export default Footer;
