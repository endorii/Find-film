import { useHttp } from "../hooks/useHttp";

const MoviesService = () => {
const { request } = useHttp();

const _apiBase = 'https://api.themoviedb.org/3/';
const _apiKey = 'api_key=a3763a373f264212ce3c4f8cf0b4ade1';

const getResponse = async (endpoint) => {
	const res = await request(`${_apiBase}${endpoint}`);
	return res;
};

const getFilmById = async (id) => {
	const res = await getResponse(`movie/${id}?${_apiKey}&language=en-US`);
	return res;
};

const getVideo = async (id) => {
	const res = await getResponse(`movie/${id}/videos?${_apiKey}&language=en-US`);
	return res;
};

const getPopularFilms = async () => {
	const res = await getResponse(`movie/popular?${_apiKey}`);
	return res;
};

const getPopularCartoons = async () => {
	const res = await getResponse(`discover/movie?${_apiKey}&with_genres=16`);
	return res;
};

const getPopularAnime = async () => {
	const res = await getResponse(`discover/movie?${_apiKey}&with_genres=16&with_original_language=ja`);
	return res;
};

const getPopularSeries = async () => {
	const res = await getResponse(`discover/tv?${_apiKey}&with_genres=18`);
	return res;
};

const getFilmsByGenreId = async (genreId, without, origLang, currentPage = 1) => {
	const res = await getResponse(`discover/movie?${_apiKey}&sort_by=popularity.desc${origLang}&with_genres=${genreId}&without_genres=${without}&page=${currentPage + 1}`);
	return res;
};

const searchMovies = async (query) => {
	const res = await getResponse(`search/movie?${_apiKey}&query=${query}`);
	return res;
};

return {
	getResponse,
	getPopularCartoons,
	getPopularAnime,
	getPopularSeries,
	getFilmById,
	getVideo,
	getFilmsByGenreId,
	searchMovies,
	getPopularFilms
	};
};

export default MoviesService;