type Props = { children: JSX.Element };

const Layout = ({ children }: Props) => {
	return (
		<>
			<h1>HomePage</h1>
			<div>{children}</div>
		</>
	);
};

export default Layout;
