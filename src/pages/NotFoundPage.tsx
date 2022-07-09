import styled from '@emotion/styled';
import StyledLink from '../components/atoms/StyledLink';
import { Button } from '@mui/material';

const Wrapper = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const Text = styled.div`
	font-size: 128px;
	font-weight: 400;
`;

const NotFoundPage = () => {
	return (
		<Wrapper>
			<Text>404 Not Found</Text>
			<StyledLink to='/'>
				<Button>홈으로</Button>
			</StyledLink>
		</Wrapper>
	);
};

export default NotFoundPage;
