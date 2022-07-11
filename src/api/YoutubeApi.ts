import Send from './index';
// TODO: Type 가지고 와서 get 뒤에 타입 설정하기

// 요청 기준과 일치하는 0개 이상의 channel 리소스 집합을 반환합니다.
export const getChannels = () => {
	const fetcher = Send.get('/channels', {
		params: {
			part: 'snippet',
			forUsername: '입질의 추억',
			key: process.env.REACT_APP_YOUTUBE_API_KEY,
		},
	});

	return fetcher;
};

// API 요청 매개변수와 일치하는 재생목록 항목의 모음을 반환합니다.
// 지정된 재생목록의 모든 항목을 검색하거나 고유 ID를 통해 하나 또는 여러 개의 재생목록 항목을 검색할 수 있습니다.
export const getPlayListItems = (playlistId: string) => {
	const fetcher = Send.get('/playlistItems', {
		params: {
			part: 'snippet',
			id: playlistId,
			key: process.env.REACT_APP_YOUTUBE_API_KEY,
		},
	});
	return fetcher;
};

// API 요청에 지정된 쿼리 매개변수와 일치하는 검색결과의 모음을 반환합니다.
// 기본적으로 검색결과의 집합은 쿼리 매개변수와 일치하는 video, channel, playlist 리소스를 식별하지만,
//  특정 유형의 리소스만 검색하도록 쿼리를 구성할 수도 있습니다.
export const getSearchList = () => {
	const fetcher = Send.get('/search', {
		params: {
			part: 'snippet',
			relatedToVideoId: 'Daa8MWKwRw0',
			key: process.env.REACT_APP_YOUTUBE_API_KEY,
		},
	});
	return fetcher;
};

//videoCategory 리소스는 업로드된 동영상과 연결되었거나 연결할 수 있는 카테고리를 확인합니다.
export const getVideoCategories = () => {
	const fetcher = Send.get('/videoCategories', {
		params: { part: 'snippet', key: process.env.REACT_APP_YOUTUBE_API_KEY },
	});
	return fetcher;
};

// video 리소스는 YouTube 동영상을 나타냅니다.
export const getVideosList = (videoId: string) => {
	const fetcher = Send.get('/videos', {
		params: {
			part: 'snippet',
			id: videoId,
			key: process.env.REACT_APP_YOUTUBE_API_KEY,
		},
	});
	return fetcher;
};
