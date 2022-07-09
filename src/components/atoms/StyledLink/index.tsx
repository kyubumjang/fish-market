import { Link, LinkProps } from 'react-router-dom';
import styled from '@emotion/styled';

const StyledRouterLink = styled(Link)`
	text-decoration: none;
	&:focus,
	&:hover,
	&:visited,
	&:link,
	&:active {
		text-decoration: none;
	}
`;

interface Props extends LinkProps {
	children: JSX.Element;
}

const StyledLink = ({ children, ...props }: Props) => {
	return <StyledRouterLink {...props}>{children}</StyledRouterLink>;
};

export default StyledLink;
