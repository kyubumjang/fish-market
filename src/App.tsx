import React, { useMemo, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { HomePage, NotFoundPage } from './pages';
import Layout from './layout/layout';
import GlobalStyle from './styles/GlobalStyle';
import { darkTheme, lightTheme } from './themes';
import {
	createTheme,
	ThemeProvider,
	PaletteMode,
	CssBaseline,
} from '@mui/material';
import { ColorContext } from './contexts/ColorContext';

function App() {
	const [mode, setMode] = useState<PaletteMode>('light');
	const colorMode = useMemo(
		() => ({
			toggleColorMode: () => {
				setMode((prevMode: PaletteMode) =>
					prevMode === 'light' ? 'dark' : 'light'
				);
			},
		}),
		[]
	);
	const theme = useMemo(
		() => createTheme(mode === 'light' ? lightTheme : darkTheme),
		[mode]
	);

	return (
		<ColorContext.Provider value={colorMode}>
			<ThemeProvider theme={theme}>
				<CssBaseline enableColorScheme />
				<div className='App'>
					<GlobalStyle />
					<Routes>
						<Route path='/' element={<Layout />}>
							<Route index element={<HomePage />} />
						</Route>
						<Route path='*' element={<NotFoundPage />} />
					</Routes>
				</div>
			</ThemeProvider>
		</ColorContext.Provider>
	);
}

export default App;
