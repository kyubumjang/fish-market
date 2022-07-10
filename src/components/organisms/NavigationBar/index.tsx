import * as React from 'react';
import {
	AppBar,
	Box,
	Toolbar,
	Typography,
	Container,
	Button,
} from '@mui/material';

import AnchorIcon from '@mui/icons-material/Anchor';
import { SwitchModeButton } from '../../molecules/SwitchModeButton';
import { StyledLink } from '../../atoms';

const pages = [
	{
		title: '꼭 확인해볼 사항',
		path: '/notice',
	},
	{
		title: '유투브',
		path: '/youtube',
	},
	{
		title: '추천 시장',
		path: '/recommend/market',
	},
	{
		title: '추천 항구',
		path: '/recommend/anchor',
	},
	{
		title: '소개',
		path: '/about',
	},
];
// const settings = ['프로필', '계정', '대시보드', '로그아웃'];

const NavigationBar = () => {
	return (
		<AppBar position='static'>
			<Container maxWidth='xl'>
				<Toolbar disableGutters>
					<AnchorIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
					<Typography
						variant='h6'
						noWrap
						component='a'
						href='/'
						sx={{
							mr: 2,
							display: { xs: 'none', md: 'flex' },
							fontWeight: 700,
							letterSpacing: '.3rem',
							color: 'inherit',
							textDecoration: 'none',
						}}
					>
						항구
					</Typography>

					<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
						{pages.map((page) => (
							<StyledLink to={page.path} key={page.title}>
								<Button
									key={page.title}
									// onClick={handleCloseNavMenu}
									sx={{
										my: 2,
										color: 'white',
										display: 'block',
										fontWeight: 'bold',
									}}
								>
									{page.title}
								</Button>
							</StyledLink>
						))}
					</Box>
					<Box>
						<SwitchModeButton />
					</Box>
					{/* <Box sx={{ flexGrow: 0 }}>
						<Tooltip title='프로필 메뉴'>
							<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
								<Avatar alt='profile' src='/static/images/avatar/2.jpg' />
							</IconButton>
						</Tooltip>
						<Menu
							sx={{ mt: '45px' }}
							id='menu-appbar'
							anchorEl={anchorElUser}
							anchorOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							open={Boolean(anchorElUser)}
							onClose={handleCloseUserMenu}
						>
							{settings.map((setting) => (
								<MenuItem key={setting} onClick={handleCloseUserMenu}>
									<Typography textAlign='center'>{setting}</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box> */}
				</Toolbar>
			</Container>
		</AppBar>
	);
};
export default NavigationBar;
