import { Box, IconButton, Tooltip, useTheme } from '@mui/material';
import DarkIcon from '@mui/icons-material/Brightness4';
import LightIcon from '@mui/icons-material/Brightness7';
import React from 'react';
import { ColorContext } from '../../../contexts/ColorContext';
export const SwitchModeButton = () => {
	const theme = useTheme();
	const colorMode = React.useContext(ColorContext);
	return (
		<Box
			sx={{
				display: 'flex',
				width: '100%',
				alignItems: 'center',
				justifyContent: 'center',
				mr: 1,
			}}
		>
			<Tooltip title={'mode 변경'}>
				<IconButton
					sx={{ mr: 1 }}
					onClick={colorMode.toggleColorMode}
					color='inherit'
				>
					{theme.palette.mode === 'dark' ? <LightIcon /> : <DarkIcon />}
				</IconButton>
			</Tooltip>
		</Box>
	);
};
