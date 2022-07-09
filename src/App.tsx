import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './layout/layout';
import { HomePage } from './pages';

function App() {
	return (
		<div className='App'>
			<Layout>
				<Routes>
					<Route path='/' element={<HomePage />} />
				</Routes>
			</Layout>
		</div>
	);
}

export default App;
