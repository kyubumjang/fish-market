import { Container, Divider, Grid, Typography } from '@mui/material';
import Markdown from '../../molecules/MarkdownRenderer';

interface MainProps {
	posts: ReadonlyArray<string>;
	title: string;
}

export default function Main(props: MainProps) {
	const { posts, title } = props;

	return (
		<Grid
			item
			xs={12}
			md={8}
			sx={{
				'& .markdown': {
					py: 3,
				},
			}}
		>
			<Container maxWidth='xl'>
				<Typography variant='h6' gutterBottom>
					{title}
				</Typography>
				<Divider />
				{posts.map((post) => (
					<Markdown className='markdown' key={post.substring(0, 40)}>
						{post}
					</Markdown>
				))}
			</Container>
		</Grid>
	);
}
