import { useHttp } from "../../view/hooks/useHttp"; 

const MoviesService = () => {
    const {request} = useHttp();

    const _apiBase = 'https://api.themoviedb.org/3/movie/popular?';
    const _apiKey = 'api_key=a3763a373f264212ce3c4f8cf0b4ade1';

    const getResponse = async () => {
		const res = await request(`${_apiBase}${_apiKey}`);
		return res;
	};

	const getPopularCartoons = async () => {
		const res = await request(`https://api.themoviedb.org/3/discover/movie?${_apiKey}&with_genres=16`);
		return res;
	};

	const getPopularAnime = async () => {
		const res = await request(`https://api.themoviedb.org/3/discover/movie?${_apiKey}&with_genres=16&with_original_language=ja
		`);
		return res;
	};

	const getPopularSeries = async () => {
		const res = await request(`https://api.themoviedb.org/3/discover/tv?${_apiKey}&with_genres=18
		`);
		return res;
	};

    return {getResponse, getPopularCartoons, getPopularAnime, getPopularSeries};

}

export default MoviesService;




	// const _transformCharacter = (char) => {
	// 	return {
	// 		id: char.id,
	// 		name: char.name,
	// 		description: char.description
	// 			? `${char.description.slice(0, 210)}...`
	// 			: "There is no description for this character",
	// 		thumbnail: char.thumbnail.path + "." + char.thumbnail.extension,
	// 		homepage: char.urls[0].url,
	// 		wiki: char.urls[1].url,
	// 		comics: char.comics.items,
	// 	};
	// };

	// const _transformComics = (comics) => {
	// 	return {
	// 		id: comics.id,
	// 		title: comics.title,
	// 		description: comics.description || "There is no description",
	// 		pageCount: comics.pageCount
	// 			? `${comics.pageCount} p.`
	// 			: "No information about the number of pages",
	// 		thumbnail: comics.thumbnail.path + "." + comics.thumbnail.extension,
	// 		language: comics.textObjects[0]?.language || "en-us",
	// 		price: comics.prices[0].price
	// 			? `${comics.prices[0].price}$`
	// 			: "not available",
	// 	};
	// };

	