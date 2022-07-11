import { useQuery } from 'react-query';
import { getPlayListItems, getVideosList } from '../api/YoutubeApi';

export const YOUTUBE_VIDEOS_QUERY_KEY = '/videos';
export const YOUTUBE_PLAYLIST_QUERY_KEY = '/playlist';
export const useYoutubeVideosQuery = (videoId: string) => {
	return useQuery(YOUTUBE_VIDEOS_QUERY_KEY, () => getVideosList(videoId));
};

export const useYoutubePlayListQuery = (playlistId: string) => {
	return useQuery(YOUTUBE_PLAYLIST_QUERY_KEY, () =>
		getPlayListItems(playlistId)
	);
};
