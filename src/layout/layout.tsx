import { Outlet } from 'react-router-dom';
import { Footer, NavigationBar } from '../components/organisms';

const Layout = () => {
	return (
		<>
			<NavigationBar />
			<Outlet />
			<Footer />
		</>
	);
};

export default Layout;
