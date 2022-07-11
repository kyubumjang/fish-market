import axios from 'axios';

const instance = axios.create({
	baseURL: process.env.REACT_APP_YOUTUBE_END_POINT,
	timeout: 10000,
});

instance.interceptors.request.use(
	(config) => {
		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);

export default instance;
