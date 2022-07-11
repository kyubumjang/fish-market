import React, { useMemo, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './layout/layout';
import { HomePage, NotFoundPage, YoutubePage } from './pages';
import GlobalStyle from './styles/GlobalStyle';
import { darkTheme, lightTheme } from './themes';
import {
	createTheme,
	ThemeProvider,
	PaletteMode,
	CssBaseline,
} from '@mui/material';
import { ColorContext } from './contexts/ColorContext';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
const queryClient = new QueryClient();

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
		<QueryClientProvider client={queryClient}>
			<ColorContext.Provider value={colorMode}>
				<ThemeProvider theme={theme}>
					<CssBaseline enableColorScheme />
					<div className='App'>
						<GlobalStyle />
						<Routes>
							<Route path='/' element={<Layout />}>
								<Route index element={<HomePage />} />
								<Route path='/youtube' element={<YoutubePage />}></Route>
								{/* <Route path='/notice' element={<NoticePage />}></Route>
							<Route path='/recommend/market' element={<MarketPage />}></Route>
							<Route path='/recommend/anchor' element={<AnchorPage />}></Route>
							<Route path='/about' element={<AboutPage />}></Route> */}
							</Route>
							<Route path='*' element={<NotFoundPage />} />
						</Routes>
					</div>
				</ThemeProvider>
			</ColorContext.Provider>
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	);
}

export default App;
