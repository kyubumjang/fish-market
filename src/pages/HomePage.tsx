import { Box, Grid } from '@mui/material';
import FeaturedPost from '../components/molecules/FeaturedPost';
import MainFeaturedPost from '../components/molecules/MainFeaturedPost';
import Main from '../components/organisms/Main';
import noticePost from '../Markdown/notice.md';
import informationPost1 from '../Markdown/information-post1.md';
import informationPost2 from '../Markdown/information-post2.md';
import { useEffect, useState } from 'react';
import { Container } from '@mui/system';

const mainFeaturedPost = {
	title: '여름에 먹으면 맛있는 어종',
	description: '여름에 먹으면 맛있는 어종에 대해 소개해드립니다.',
	image: 'https://source.unsplash.com/random',
	imageText: 'main image description',
	linkText: '포스트 읽기…',
};

const featuredPosts = [
	{
		title: '저울치기가 불가능한 시장',
		date: '7월 10일',
		description: '저울치기가 불가능한 속초 시장에 대해 소개해드립니다.',
		image: 'https://source.unsplash.com/random',
		imageLabel: 'Image Text',
	},
	{
		title: '속초 관광수산시장 체험기',
		date: '7월 10일',
		description: '속초 관광수산시장 체험기에 대해 포스트를 작성합니다.',
		image: 'https://source.unsplash.com/random',
		imageLabel: 'Image Text',
	},
];
const mdFiles = [noticePost, informationPost1, informationPost2];

const HomePage = () => {
	const [posts, setPosts] = useState<readonly string[]>([]);
	const [loading, setLoading] = useState<Boolean>(false);
	console.log('====================================');
	console.log(mdFiles);
	console.log('====================================');
	useEffect(() => {
		const fetchData = async () => {
			const postArr = await Promise.all(
				mdFiles.map(async (mdFile) => {
					const text = await fetch(mdFile).then((res) => res.text());
					console.log('====================================');
					console.log(text);
					console.log('====================================');
					return text;
				})
			);
			setPosts(postArr);
		};

		fetchData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	console.log(posts);

	return (
		<Box>
			<MainFeaturedPost post={mainFeaturedPost} />
			<Grid container spacing={4}>
				{featuredPosts.map((post) => (
					<FeaturedPost key={post.title} post={post} />
				))}
			</Grid>
			<Grid container spacing={5} sx={{ mt: 3 }}>
				<Main title='수산시장 및 항구 가기전 확인할 사항' posts={posts} />
			</Grid>
		</Box>
	);
};

export default HomePage;
